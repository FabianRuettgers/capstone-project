import { fireEvent, render, screen } from "@testing-library/react";
import ResetFilterButton from ".";

test("renders a button with the aria label 'reset filter Button'", () => {
  render(<ResetFilterButton />);
  const buttonWithAriaLabel = screen.getByLabelText("reset filter Button");
  expect(buttonWithAriaLabel).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const onClick = jest.fn();
  render(<ResetFilterButton onClick={onClick} />);
  const button = screen.getByLabelText("reset filter Button");
  fireEvent.click(button);

  expect(onClick).toHaveBeenCalled();
});
