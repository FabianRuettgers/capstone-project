import { render, screen } from "@testing-library/react";
import MovieTitle from ".";

test("renders movie title and tagline correctly", () => {
  const movie = {
    title: "Movie Title",
    tagline: "A great movie",
  };

  render(<MovieTitle movie={movie} />);
  expect(screen.getByText("Movie Title")).toBeInTheDocument();
  expect(screen.getByText("A great movie")).toBeInTheDocument();
});
