import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useLoading } from "@/components/LoadingHandling/LoadingHook";
import { uid } from "uid";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [userInformation, setUserInformation] = useLocalStorageState(
    "UserInformation",
    { defaultValue: [] }
  );

  const [query, setQuery] = useState("");

  const [activeTab, setActiveTab] = useState("saved");

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  const [startDelete, setStartDelete] = useState(false);
  function handleDeleteButtonClick() {
    setStartDelete((prevStartDelete) => !prevStartDelete);
  }
  function handleDelete(id) {
    setUserInformation((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === id ? { id: movie.id, comments: movie.comments } : null
      )
    );
    handleDeleteButtonClick();
  }

  const [startRating, setStartRating] = useState(false);
  function handleRateButtonClick() {
    setStartRating((prevStartRating) => !prevStartRating);
  }
  function handleRate(id) {
    return function (event) {
      event.preventDefault();
      setUserInformation((movie) => {
        if (userInformation.find((movie) => movie.id === id)) {
          return userInformation.map((movie) =>
            movie.id === id
              ? {
                  ...movie,
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

  const [startComment, setStartComment] = useState(false);
  function handleCommentButtonClick() {
    setStartComment((prevStartComment) => !prevStartComment);
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

  const { isFetchLoading, setFetchLoading, clearFetchLoading } = useLoading();
  function startFetchLoading() {
    setFetchLoading();
    setTimeout(() => {
      clearFetchLoading();
    }, 2000);
  }

  const [startEditComment, setStartEditComment] = useState(false);
  const [editingComment, setEditingComment] = useState(null);

  function handleEditButtonClick(id) {
    if (editingComment && editingComment.id === id) {
      setStartEditComment(false);
      setEditingComment(null);
    } else {
      const commentToEdit = userInformation
        .flatMap((user) => user.comments || [])
        .find((comment) => comment.id === id);

      if (commentToEdit) {
        setEditingComment(commentToEdit);
        setStartEditComment(true);
      }
    }
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setEditingComment((prevEditingComment) => ({
      ...prevEditingComment,
      content: value,
    }));
  }

  function handleEditDone(id) {
    console.log(userInformation);
    const updatedUserInformation = userInformation.map((user) => {
      if (user.id === id) {
        const updatedComments = user.comments.map((comment) => {
          if (comment.id === editingComment.id) {
            return { ...comment, content: editingComment.content };
          }
          return comment;
        });

        return { ...user, comments: updatedComments };
      }
      return user;
    });

    setUserInformation(updatedUserInformation);
    setEditingComment(null);
    setStartEditComment(false);
  }

  function handleEditGoBack() {
    setEditingComment(null);
    setStartEditComment(false);
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          query={query}
          setQuery={setQuery}
          userInformation={userInformation}
          handleBookmarkToggle={handleBookmarkToggle}
          handleRate={handleRate}
          handleRateButtonClick={handleRateButtonClick}
          startRating={startRating}
          handleDelete={handleDelete}
          handleDeleteButtonClick={handleDeleteButtonClick}
          startDelete={startDelete}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          isFetchLoading={isFetchLoading}
          startFetchLoading={startFetchLoading}
          handleCommentButtonClick={handleCommentButtonClick}
          handleComment={handleComment}
          startComment={startComment}
          handleEditButtonClick={handleEditButtonClick}
          startEditComment={startEditComment}
          editingComment={editingComment}
          handleInputChange={handleInputChange}
          handleEditDone={handleEditDone}
          handleEditGoBack={handleEditGoBack}
        />
      </SWRConfig>
    </>
  );
}
