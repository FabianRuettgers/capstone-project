import { fireEvent, render, screen } from "@testing-library/react";
import EditCommentButton from ".";

test("renders a button with the aria label 'click to edit comment'", () => {
  render(<EditCommentButton />);
  const buttonWithAriaLabel = screen.getByLabelText("click to edit comment");
  expect(buttonWithAriaLabel).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const onClick = jest.fn();
  render(<EditCommentButton onClick={onClick} />);
  const editButton = screen.getByLabelText("click to edit comment");
  fireEvent.click(editButton);

  expect(onClick).toHaveBeenCalled();
});
