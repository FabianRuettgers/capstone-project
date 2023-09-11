import { render, screen } from "@testing-library/react";
import RatingItem from ".";

test("renders user rating text correctly", () => {
  render(<RatingItem movieRating={8} />);

  expect(screen.getByText(/Your rating:/i)).toBeInTheDocument();
  expect(screen.getByText(/8 \/ 10/i)).toBeInTheDocument();
});
