import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useLoading } from "@/components/LoadingHandling/LoadingHook";

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
      currentMovies.filter((movie) => movie.id !== id)
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
        />
      </SWRConfig>
    </>
  );
}
