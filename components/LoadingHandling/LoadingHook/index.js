import { useState } from "react";

export function useLoading() {
  const [isFetchLoading, setIsFetchLoading] = useState(false);

  const setFetchLoading = () => {
    setIsFetchLoading(true);
  };

  const clearFetchLoading = () => {
    setIsFetchLoading(false);
  };

  return { isFetchLoading, setFetchLoading, clearFetchLoading };
}
