import { render, screen } from "@testing-library/react";
import MovieComments from ".";

const sampleMovieComments = [
  {
    id: 1,
    author: "User1",
    created_at: "2023-09-08T12:00:00Z",
    content: "This is a comment.",
  },
];

test("renders comments correctly", () => {
  render(
    <MovieComments
      id={1}
      userInformation={[]}
      currentAction={{}}
      MovieComments={{ results: sampleMovieComments }}
      handleEditButtonClick={() => {}}
      handleInputChange={() => {}}
      handleEditDone={() => {}}
      handleEditGoBack={() => {}}
      handleCommentDeleteButtonClick={() => {}}
    />
  );

  expect(screen.getByText("User1")).toBeInTheDocument();
  expect(screen.getByText("This is a comment.")).toBeInTheDocument();
});
