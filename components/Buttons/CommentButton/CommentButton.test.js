import { fireEvent, render, screen } from "@testing-library/react";
import CommentButton from ".";

test("renders a button with the aria label 'click button to comment'", () => {
  render(<CommentButton />);
  const buttonWithAriaLabel = screen.getByLabelText("click button to comment");
  expect(buttonWithAriaLabel).toBeInTheDocument();
});

test("calls handleCommentButtonClick when clicked", () => {
  const handleCommentButtonClick = jest.fn();
  render(<CommentButton handleCommentButtonClick={handleCommentButtonClick} />);
  const commentButton = screen.getByLabelText("click button to comment");
  fireEvent.click(commentButton);

  expect(handleCommentButtonClick).toHaveBeenCalled();
});
