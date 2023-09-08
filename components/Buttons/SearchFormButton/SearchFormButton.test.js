import { render, screen } from "@testing-library/react";
import SearchFormButton from ".";

test("renders a button with the text 'Search Movie'", () => {
  render(<SearchFormButton />);
  const buttonWithText = screen.getByText("Search Movie");
  expect(buttonWithText).toBeInTheDocument();
});

test("has a link to '/movie/search'", () => {
  render(<SearchFormButton />);
  const linkElement = screen.getByRole("link", { name: "Search Movie" });
  expect(linkElement).toHaveAttribute("href", "/movie/search");
});
