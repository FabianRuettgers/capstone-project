import { fireEvent, render, screen } from "@testing-library/react";
import DeleteButton from ".";

test("renders a button with the aria label 'click to delete rating'", () => {
  render(<DeleteButton />);
  const buttonWithAriaLabel = screen.getByLabelText("click to delete rating");
  expect(buttonWithAriaLabel).toBeInTheDocument();
});

test("calls handleDeleteButtonClick when clicked", () => {
  const handleDeleteButtonClick = jest.fn();
  render(<DeleteButton handleDeleteButtonClick={handleDeleteButtonClick} />);
  const deleteButton = screen.getByLabelText("click to delete rating");
  fireEvent.click(deleteButton);

  expect(handleDeleteButtonClick).toHaveBeenCalled();
});
