import { fireEvent, render, screen } from "@testing-library/react";
import BookmarkButton from ".";

test("renders a button with the aria label 'click to toggle Bookmark'", () => {
  render(<BookmarkButton />);
  const buttonWithAriaLabel = screen.getByLabelText("click to toggle Bookmark");
  expect(buttonWithAriaLabel).toBeInTheDocument();
});

test("calls handleBookmarkToggle when clicked", () => {
  const handleBookmarkToggle = jest.fn();
  render(
    <BookmarkButton
      isBookmarked={false}
      handleBookmarkToggle={handleBookmarkToggle}
      id={1}
    />
  );
  const bookmarkButton = screen.getByLabelText("click to toggle Bookmark");
  fireEvent.click(bookmarkButton);

  expect(handleBookmarkToggle).toHaveBeenCalledWith(1);
});
