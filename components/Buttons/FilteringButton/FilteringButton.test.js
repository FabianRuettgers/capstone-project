import { fireEvent, render, screen } from "@testing-library/react";
import FilteringButton from ".";

test("renders a button with the aria label 'click to filter movies'", () => {
  render(<FilteringButton currentAction={{ ratingFilter: 0 }} />);
  const buttonWithAriaLabel = screen.getByLabelText("click to filter movies");
  expect(buttonWithAriaLabel).toBeInTheDocument();
});

test("calls handleFilterButtonClick when clicked", () => {
  const handleFilterButtonClick = jest.fn();
  render(
    <FilteringButton
      handleFilterButtonClick={handleFilterButtonClick}
      currentAction={{ ratingFilter: 0 }}
    />
  );
  const filterButton = screen.getByLabelText("click to filter movies");
  fireEvent.click(filterButton);

  expect(handleFilterButtonClick).toHaveBeenCalled();
});
