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
  const [startRating, setStartRating] = useState(false);
  function handleRateButtonClick() {
    setStartRating((prevStartRating) => !prevStartRating);
  }
  const [startDelete, setStartDelete] = useState(false);
  function handleDeleteButtonClick() {
    setStartDelete((prevStartDelete) => !prevStartDelete);
  }

  function handleDelete(id) {
    setUserInformation((currentMovies) => {
      const updatedMovies = currentMovies.filter((movie) => movie.id !== id);
      return updatedMovies;
    });
    handleDeleteButtonClick();
  }

  function handleRate(id) {
    return function (event) {
      event.preventDefault();
      const newRating = event.target.elements.rating.value;
      setUserInformation((movie) => {
        const info = userInformation.find((movie) => movie.id === id);
        if (info) {
          return userInformation.map((movie) =>
            movie.id === id
              ? { ...info, rating: newRating, isBookmarked: false }
              : info
          );
        }
        return [
          ...userInformation,
          {
            id: id,
            rating: newRating,
            isBookmarked: false,
          },
        ];
      });
      event.target.reset();
      handleRateButtonClick();
    };
  }

  function handleBookmarkToggle(id) {
    setUserInformation((currentMovies) => {
      const existingMovie = currentMovies.find(
        (movieItem) => movieItem.id === id
      );

      if (existingMovie) {
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
