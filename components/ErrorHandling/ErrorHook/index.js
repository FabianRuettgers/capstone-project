import { useState } from "react";

export function useError() {
  const [isError, setIsError] = useState(false);

  const setError = () => {
    setIsError(true);
  };

  const clearError = () => {
    setIsError(false);
  };

  return { isError, setError, clearError };
}
