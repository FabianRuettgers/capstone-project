import { render, screen, fireEvent } from "@testing-library/react";
import ButtonSection from ".";

const sampleUserInformationRated = [
  { id: 433, isBookmarked: false, rating: 8 },
];
const sampleUserInformationBookmarked = [{ id: 433, isBookmarked: true }];

test("renders bookmark button if not rated", () => {
  render(
    <ButtonSection
      id={433}
      userInformation={sampleUserInformationBookmarked}
      handleBookmarkToggle={() => {}}
      handleRateButtonClick={() => {}}
      handleDeleteButtonClick={() => {}}
      handleCommentButtonClick={() => {}}
    />
  );

  expect(screen.getByLabelText("click to toggle Bookmark")).toBeInTheDocument();
});

test("renders delete rating button if rated", () => {
  render(
    <ButtonSection
      id={433}
      userInformation={sampleUserInformationRated}
      handleBookmarkToggle={() => {}}
      handleRateButtonClick={() => {}}
      handleDeleteButtonClick={() => {}}
      handleCommentButtonClick={() => {}}
    />
  );

  expect(screen.getByLabelText("click to delete rating")).toBeInTheDocument();
});
