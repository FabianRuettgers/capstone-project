import { render, screen, fireEvent } from "@testing-library/react";
import StreamingButton from ".";

test("renders a button with the text 'Where to watch?'", () => {
  render(<StreamingButton />);
  const buttonWithText = screen.getByText("Where to watch?");
  expect(buttonWithText).toBeInTheDocument();
});

test("calls handleProviderButtonClick when clicked", () => {
  const handleProviderButtonClick = jest.fn();
  render(
    <StreamingButton handleProviderButtonClick={handleProviderButtonClick} />
  );
  const button = screen.getByText("Where to watch?");
  fireEvent.click(button);

  expect(handleProviderButtonClick).toHaveBeenCalled();
});
