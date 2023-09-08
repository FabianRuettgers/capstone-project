import { render, screen } from "@testing-library/react";
import MovieDuration from ".";

test("renders movie duration correctly", () => {
  const movie = {
    runtime: 120,
  };

  render(<MovieDuration movie={movie} />);
  expect(screen.getByText("120 min")).toBeInTheDocument();
});

test('renders heading "Duration"', () => {
  const movie = {
    runtime: 120,
  };

  render(<MovieDuration movie={movie} />);
  expect(screen.getByText("Duration")).toBeInTheDocument();
});
