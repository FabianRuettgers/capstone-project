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

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          query={query}
          setQuery={setQuery}
          bookmarkedMovies={bookmarkedMovies}
          setBookmarkedMovies={setBookmarkedMovies}
        />
      </SWRConfig>
    </>
  );
}
