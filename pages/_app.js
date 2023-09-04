import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useLoading } from "@/components/LoadingHandling/LoadingHook";
import { uid } from "uid";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { isFetchLoading, setFetchLoading, clearFetchLoading } = useLoading();
  const [userInformation, setUserInformation] = useLocalStorageState(
    "UserInformation",
    { defaultValue: [] }
  );
  const [currentAction, setCurrentAction] = useState({
    userInput: "",
    activeTab: "saved",
    editingComment: null,
    query: "",
    ratingFilter: 0,
  });

  // search query input change
  function handleQueryInputChange(event) {
    setCurrentAction((prevAction) => ({
      ...prevAction,
      query: event.target.value,
    }));
  }
  // Custom hook for fetching
  function startFetchLoading() {
    setFetchLoading();
    setTimeout(() => {
      clearFetchLoading();
    }, 2000);
  }
  // Switching Tab function User-list
  function handleTabClick(tab) {
    setCurrentAction((prevAction) => ({
      ...prevAction,
      activeTab: tab,
    }));
  }
  // Delete Rating
  function handleDeleteButtonClick() {
    if (currentAction.userInput === "") {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "ACTION_DELETE_RATING",
      }));
    }
    if (currentAction.userInput === "ACTION_DELETE_RATING") {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "",
      }));
    }
  }
  function handleDelete(id) {
    setUserInformation((currentMovies) =>
      currentMovies
        .map((movie) =>
          movie.id === id
            ? movie.comments
              ? { id: movie.id, comments: movie.comments }
              : null
            : movie
        )
        .filter((movie) => movie !== null)
    );
    handleDeleteButtonClick();
  }
  // Set Rating
  function handleRateButtonClick() {
    if (currentAction.userInput === "") {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "ACTION_RATING",
      }));
    }
    if (currentAction.userInput === "ACTION_RATING") {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "",
      }));
    }
  }
  function handleRate(id, data) {
    return function (event) {
      event.preventDefault();
      setUserInformation((movie) => {
        if (userInformation.find((movie) => movie.id === id)) {
          return userInformation.map((movie) =>
            movie.id === id
              ? {
                  ...movie,
                  title: data.data.title || null,
                  watchtime: data.data.runtime || null,
                  isBookmarked: false,
                  bookmarkDate: undefined,
                  rating: event.target.elements.rating.value,
                  ratingDate: movie.rating
                    ? undefined
                    : new Date().toLocaleDateString("de-DE", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      }),
                }
              : movie
          );
        }
        return [
          ...userInformation,
          {
            id: id,
            title: data.data.title || null,
            watchtime: data.data.runtime || null,
            isBookmarked: false,
            rating: event.target.elements.rating.value,
            ratingDate: new Date().toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }),
          },
        ];
      });
      event.target.reset();
      handleRateButtonClick();
    };
  }
  // Set Comment
  function handleCommentButtonClick() {
    if (currentAction.userInput === "") {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "ACTION_COMMENT",
      }));
    }
    if (currentAction.userInput === "ACTION_COMMENT") {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "",
      }));
    }
  }
  function handleComment(id) {
    return function (event) {
      event.preventDefault();
      setUserInformation((userInformation) => {
        const userWithComments = userInformation.find((user) => user.id === id);

        if (userWithComments) {
          return userInformation.map((user) =>
            user.id === id
              ? {
                  ...user,
                  comments: [
                    ...(user.comments || []),
                    {
                      id: uid(),
                      author: event.target.elements.author.value,
                      content: event.target.elements.comment.value,
                      created_at: new Date()
                        .toLocaleDateString("de-DE", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .split(".")
                        .reverse()
                        .join("."),
                    },
                  ],
                }
              : user
          );
        } else {
          return [
            ...userInformation,
            {
              id: id,
              comments: [
                {
                  id: uid(),
                  author: event.target.elements.author.value,
                  content: event.target.elements.comment.value,
                  created_at: new Date()
                    .toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .split(".")
                    .reverse()
                    .join("."),
                },
              ],
            },
          ];
        }
      });

      event.target.reset();
      handleCommentButtonClick();
    };
  }
  // Bookmark toggle
  function handleBookmarkToggle(id) {
    setUserInformation((currentMovies) => {
      if (currentMovies.find((movie) => movie.id === id)) {
        return currentMovies.map((movie) =>
          movie.id === id
            ? {
                ...movie,
                isBookmarked: !movie.isBookmarked,
                bookmarkDate: movie.isBookmarked
                  ? undefined
                  : new Date().toLocaleDateString("de-DE", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }),
              }
            : movie
        );
      } else {
        return [
          ...currentMovies,
          {
            id: id,
            isBookmarked: true,
            bookmarkDate: new Date().toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }),
          },
        ];
      }
    });
  }

  // Comment Edit
  function handleEditButtonClick(id) {
    if (
      currentAction.editingComment &&
      currentAction.editingComment.id === id
    ) {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "",
        editingComment: null,
      }));
    } else {
      const commentToEdit = userInformation
        .flatMap((user) => user.comments || [])
        .find((comment) => comment.id === id);

      if (commentToEdit) {
        setCurrentAction((prevAction) => ({
          ...prevAction,
          userInput: "ACTION_COMMENT_EDIT",
          editingComment: commentToEdit,
        }));
      }
    }
  }

  function handleInputChange(event) {
    const changeValue = event.target.value;
    setCurrentAction((prevAction) => ({
      ...prevAction,
      editingComment: {
        ...prevAction.editingComment,
        content: changeValue,
      },
    }));
  }

  function handleEditDone(id) {
    const updatedUserInformation = userInformation.map((user) => {
      if (user.id === id) {
        const updatedComments = user.comments.map((comment) => {
          if (comment.id === currentAction.editingComment.id) {
            return {
              ...comment,
              content: currentAction.editingComment.content,
            };
          }
          return comment;
        });

        return { ...user, comments: updatedComments };
      }
      return user;
    });

    setUserInformation(updatedUserInformation);
    setCurrentAction((prevAction) => ({
      ...prevAction,
      userInput: "",
      editingComment: null,
    }));
  }

  function handleEditGoBack() {
    setCurrentAction((prevAction) => ({
      ...prevAction,
      userInput: "",
      editingComment: null,
    }));
  }
  // Comment delete
  function handleCommentDeleteButtonClick() {
    if (currentAction.userInput === "ACTION_COMMENT_EDIT") {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "ACTION_DELETE_COMMENT",
      }));
    }
    if (currentAction.userInput === "ACTION_DELETE_COMMENT") {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "ACTION_COMMENT_EDIT",
      }));
    }
  }
  function handleDeleteComment(id, commentId) {
    setUserInformation((currentUsers) =>
      currentUsers.map((user) => {
        if (user.id === id && user.comments) {
          const updatedComments = user.comments.filter(
            (comment) => comment.id !== commentId
          );

          return { ...user, comments: updatedComments };
        }
        return user;
      })
    );

    setCurrentAction((prevAction) => ({
      ...prevAction,
      userInput: "",
      editingComment: null,
    }));
  }
  //

  function handleFilterButtonClick() {
    if (currentAction.userInput === "") {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "ACTION_FILTER_RATING",
      }));
    }
    if (currentAction.userInput === "ACTION_FILTER_RATING") {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "",
      }));
    }
  }
  function handleFiltering(event) {
    event.preventDefault();
    const minRating = event.target.rating.value;
    setCurrentAction((prevAction) => ({
      ...prevAction,
      ratingFilter: minRating,
    }));
    handleFilterButtonClick();
  }

  function handleResetFilter() {
    setCurrentAction((prevAction) => ({
      ...prevAction,
      ratingFilter: 0,
    }));
    handleFilterButtonClick();
  }

  // Provider Button
  function handleProviderButtonClick() {
    if (currentAction.userInput === "") {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "ACTION_SHOW_PROVIDER",
      }));
    }
    if (currentAction.userInput === "ACTION_SHOW_PROVIDER") {
      setCurrentAction((prevAction) => ({
        ...prevAction,
        userInput: "",
      }));
    }
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          userInformation={userInformation}
          currentAction={currentAction}
          isFetchLoading={isFetchLoading}
          handleBookmarkToggle={handleBookmarkToggle}
          handleRate={handleRate}
          handleRateButtonClick={handleRateButtonClick}
          handleDelete={handleDelete}
          handleDeleteButtonClick={handleDeleteButtonClick}
          handleTabClick={handleTabClick}
          startFetchLoading={startFetchLoading}
          handleCommentButtonClick={handleCommentButtonClick}
          handleComment={handleComment}
          handleEditButtonClick={handleEditButtonClick}
          handleInputChange={handleInputChange}
          handleQueryInputChange={handleQueryInputChange}
          handleEditDone={handleEditDone}
          handleEditGoBack={handleEditGoBack}
          handleDeleteComment={handleDeleteComment}
          handleCommentDeleteButtonClick={handleCommentDeleteButtonClick}
          handleFilterButtonClick={handleFilterButtonClick}
          handleFiltering={handleFiltering}
          handleResetFilter={handleResetFilter}
          handleProviderButtonClick={handleProviderButtonClick}
        />
      </SWRConfig>
    </>
  );
}
