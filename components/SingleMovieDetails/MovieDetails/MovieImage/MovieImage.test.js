import { render, screen } from "@testing-library/react";
import MovieImage from ".";

test("renders movie image correctly without posters", () => {
  const movie = {
    data: {
      title: "Movie Title",
      poster_path: "/backup.jpg",
    },
  };

  render(<MovieImage movie={movie} />);
  const image = screen.getByAltText("Movie Title");
  expect(image).toBeInTheDocument();
});
