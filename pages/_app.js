import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [query, setQuery] = useState("");
  const [bookmarkedMovies, setBookmarkedMovies] = useLocalStorageState(
    "Bookmarked",
    { defaultValue: {} }
  );

  function handleBookmarkToggle(id) {
    setBookmarkedMovies((prevBookmarkedMovies) => ({
      ...prevBookmarkedMovies,
      [id]: !prevBookmarkedMovies[id],
    }));
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          query={query}
          setQuery={setQuery}
          bookmarkedMovies={bookmarkedMovies}
          handleBookmarkToggle={handleBookmarkToggle}
        />
      </SWRConfig>
    </>
  );
}
