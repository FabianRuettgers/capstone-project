import { fireEvent, render, screen } from "@testing-library/react";
import DeleteCommentButton from ".";

test("renders a button with the aria label 'click to delete Comment'", () => {
  render(<DeleteCommentButton />);
  const buttonWithAriaLabel = screen.getByLabelText("click to delete Comment");
  expect(buttonWithAriaLabel).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const onClick = jest.fn();
  render(<DeleteCommentButton onClick={onClick} />);
  const deleteButton = screen.getByLabelText("click to delete Comment");
  fireEvent.click(deleteButton);

  expect(onClick).toHaveBeenCalled();
});
