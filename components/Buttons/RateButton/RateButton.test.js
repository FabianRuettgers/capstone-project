import { fireEvent, render, screen } from "@testing-library/react";
import RateButton from ".";

test("renders a button with the aria label 'click to rate the movie'", () => {
  render(<RateButton />);
  const buttonWithAriaLabel = screen.getByLabelText("click to rate the movie");
  expect(buttonWithAriaLabel).toBeInTheDocument();
});

test("calls handleRateButtonClick when clicked", () => {
  const handleRateButtonClick = jest.fn();
  render(<RateButton handleRateButtonClick={handleRateButtonClick} />);
  const rateButton = screen.getByLabelText("click to rate the movie");
  fireEvent.click(rateButton);

  expect(handleRateButtonClick).toHaveBeenCalled();
});
