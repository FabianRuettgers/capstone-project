import { fireEvent, render, screen } from "@testing-library/react";
import ExitCommentButton from ".";

test("renders a button with the aria label 'Exit edit Comment Button'", () => {
  render(<ExitCommentButton />);
  const buttonWithAriaLabel = screen.getByLabelText("Exit edit Comment Button");
  expect(buttonWithAriaLabel).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const onClick = jest.fn();
  render(<ExitCommentButton onClick={onClick} />);
  const exitButton = screen.getByLabelText("Exit edit Comment Button");
  fireEvent.click(exitButton);

  expect(onClick).toHaveBeenCalled();
});
