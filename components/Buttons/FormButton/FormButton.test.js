import { fireEvent, render, screen } from "@testing-library/react";
import FormButton from ".";

test("calls handleClick when clicked", () => {
  const handleClick = jest.fn();
  render(<FormButton title="Submit" handleClick={handleClick} />);
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  expect(handleClick).toHaveBeenCalled();
});

test("applies custom button type", () => {
  render(<FormButton title="Submit" type="submit" />);
  const submitTypeButton = screen.getByText("Submit");

  expect(submitTypeButton).toHaveAttribute("type", "submit");
});
