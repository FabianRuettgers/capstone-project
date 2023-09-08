import { render, screen } from "@testing-library/react";
import UserRating from ".";

test("renders UserRating component with RatingItem correctly", () => {
  render(<UserRating rating={7} />);

  expect(screen.getByText(/Your rating:/i)).toBeInTheDocument();
  expect(screen.getByText(/7 \/ 10/i)).toBeInTheDocument();
});
