import { render, screen } from "@testing-library/react";
import MovieActors from ".";

const sampleCredits = {
  cast: [
    {
      cast_id: 1,
      profile_path: "/example.jpg",
      character: "Character 1",
      name: "Actor 1",
    },
  ],
};

test("renders actors correctly", () => {
  render(<MovieActors credits={sampleCredits} />);
  expect(screen.getByText("Character 1")).toBeInTheDocument();
  expect(screen.getByText("Actor 1")).toBeInTheDocument();
});

test("does not render if there are no actors", () => {
  const emptyCredits = { cast: [] };
  render(<MovieActors credits={emptyCredits} />);
  expect(screen.queryByText("Character")).toBeNull();
  expect(screen.queryByText("Actor")).toBeNull();
});
