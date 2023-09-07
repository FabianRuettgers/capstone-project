import { fireEvent, render, screen } from "@testing-library/react";
import SaveCommentButton from ".";

test("renders a button with the aria label 'click to save changes'", () => {
  render(<SaveCommentButton />);
  const buttonWithAriaLabel = screen.getByLabelText("click to save changes");
  expect(buttonWithAriaLabel).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const onClick = jest.fn();
  render(<SaveCommentButton onClick={onClick} />);
  const saveButton = screen.getByLabelText("click to save changes");
  fireEvent.click(saveButton);

  expect(onClick).toHaveBeenCalled();
});
