import { render, screen } from "@testing-library/react";
import MovieRating from ".";

test("renders movie rating correctly", () => {
  const movie = {
    vote_average: 8.5,
  };

  render(<MovieRating movie={movie} />);
  expect(screen.getByText("8.5 / 10")).toBeInTheDocument();
});

test('renders heading "Rating"', () => {
  const movie = {
    vote_average: 8.5,
  };

  render(<MovieRating movie={movie} />);
  expect(screen.getByText("Rating")).toBeInTheDocument();
});
