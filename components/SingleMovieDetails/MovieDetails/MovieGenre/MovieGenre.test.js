import { render, screen } from "@testing-library/react";
import GenreItem from ".";

test("renders genre item correctly with a genre", () => {
  const movie = {
    genres: [{ name: "Action" }],
  };

  render(<GenreItem movie={movie} />);
  expect(screen.getByText("Action")).toBeInTheDocument();
});

test('renders "unknown" when genre is not available', () => {
  const movie = {
    genres: [],
  };

  render(<GenreItem movie={movie} />);
  expect(screen.getByText("unknown")).toBeInTheDocument();
});

test('renders heading "Genre"', () => {
  const movie = {
    genres: [{ name: "Action" }],
  };

  render(<GenreItem movie={movie} />);
  expect(screen.getByText("Genre")).toBeInTheDocument();
});
