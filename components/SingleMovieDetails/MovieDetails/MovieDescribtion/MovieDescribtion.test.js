import { render, screen, fireEvent } from "@testing-library/react";
import MovieDescribtion from ".";

const movie = {
  data: {
    overview: "Movie overview",
  },
  provider: {
    results: {
      DE: {
        flatrate: true,
        buy: false,
      },
    },
  },
};

test("renders movie description correctly", () => {
  render(<MovieDescribtion movie={movie} />);
  expect(screen.getByText("Movie overview")).toBeInTheDocument();
});

test("calls handleProviderButtonClick when StreamingButton is clicked", () => {
  const handleProviderButtonClick = jest.fn();

  render(
    <MovieDescribtion
      movie={movie}
      handleProviderButtonClick={handleProviderButtonClick}
    />
  );
  fireEvent.click(screen.getByText("Where to watch?"));
  expect(handleProviderButtonClick).toHaveBeenCalled();
});
