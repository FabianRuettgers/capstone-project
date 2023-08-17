import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [userInformation, setUserInformation] = useLocalStorageState(
    "UserInformation",
    { defaultValue: [] }
  );

  const [query, setQuery] = useState("");

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
                  rating: event.target.elements.rating.value,
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
          },
        ];
      });
      event.target.reset();
      handleRateButtonClick();
    };
  }

  function handleBookmarkToggle(id) {
    setUserInformation((currentMovies) => {
      if (currentMovies.find((movieItem) => movieItem.id === id)) {
        return currentMovies.map((movieItem) =>
          movieItem.id === id
            ? { ...movieItem, isBookmarked: !movieItem.isBookmarked }
            : movieItem
        );
      } else {
        return [
          ...currentMovies,
          {
            id: id,
            isBookmarked: true,
          },
        ];
      }
    });
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
        />
      </SWRConfig>
    </>
  );
}
