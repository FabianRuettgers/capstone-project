import { render, screen } from "@testing-library/react";
import MovieTrailer from ".";

test("renders trailer iframe correctly", () => {
  const videoId = "eQfMbSe7F2g";

  render(<MovieTrailer videoId={videoId} />);
  const iframe = screen.getByTitle(`YouTube Video ${videoId}`);
  expect(iframe).toBeInTheDocument();
  expect(iframe).toHaveAttribute(
    "src",
    `https://www.youtube.com/embed/${videoId}`
  );
  expect(iframe).toHaveAttribute("allowFullScreen");
});
