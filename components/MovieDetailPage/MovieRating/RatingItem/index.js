import { styled } from "styled-components";

export default function RatingItem({ movie }) {
  const movieRating = movie.vote_average.toFixed(1);

  const starIconFilled = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      viewBox="0 -960 960 960"
      width="40"
    >
      <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
    </svg>
  );
  const starIconHalfFilled = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      viewBox="0 -960 960 960"
      width="40"
    >
      <path d="m480-299 157 95-42-178 138-120-182-16-71-168v387ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
    </svg>
  );
  const starIconEmpty = (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      viewBox="0 -960 960 960"
      width="40"
    >
      <path d="m323-205 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-355Z" />
    </StyledSvg>
  );

  let starIcons = [
    starIconEmpty,
    starIconEmpty,
    starIconEmpty,
    starIconEmpty,
    starIconEmpty,
  ];

  if (movieRating < 1 && movieRating >= 0) {
    starIcons = [
      starIconEmpty,
      starIconEmpty,
      starIconEmpty,
      starIconEmpty,
      starIconEmpty,
    ];
  }
  if (movieRating < 2 && movieRating >= 1) {
    starIcons = [
      starIconHalfFilled,
      starIconEmpty,
      starIconEmpty,
      starIconEmpty,
      starIconEmpty,
    ];
  }
  if (movieRating < 3 && movieRating >= 2) {
    starIcons = [
      starIconFilled,
      starIconEmpty,
      starIconEmpty,
      starIconEmpty,
      starIconEmpty,
    ];
  }
  if (movieRating < 4 && movieRating >= 3) {
    starIcons = [
      starIconFilled,
      starIconHalfFilled,
      starIconEmpty,
      starIconEmpty,
      starIconEmpty,
    ];
  }
  if (movieRating < 5 && movieRating >= 4) {
    starIcons = [
      starIconFilled,
      starIconFilled,
      starIconEmpty,
      starIconEmpty,
      starIconEmpty,
    ];
  }
  if (movieRating < 6 && movieRating >= 5) {
    starIcons = [
      starIconFilled,
      starIconFilled,
      starIconHalfFilled,
      starIconEmpty,
      starIconEmpty,
    ];
  }
  if (movieRating < 7 && movieRating >= 6) {
    starIcons = [
      starIconFilled,
      starIconFilled,
      starIconFilled,
      starIconEmpty,
      starIconEmpty,
    ];
  }
  if (movieRating < 8 && movieRating >= 7) {
    starIcons = [
      starIconFilled,
      starIconFilled,
      starIconFilled,
      starIconHalfFilled,
      starIconEmpty,
    ];
  }
  if (movieRating < 9 && movieRating >= 8) {
    starIcons = [
      starIconFilled,
      starIconFilled,
      starIconFilled,
      starIconFilled,
      starIconEmpty,
    ];
  }
  if (movieRating < 10 && movieRating >= 9) {
    starIcons = [
      starIconFilled,
      starIconFilled,
      starIconFilled,
      starIconFilled,
      starIconHalfFilled,
    ];
  }
  if (movieRating < 11 && movieRating >= 10) {
    starIcons = [
      starIconFilled,
      starIconFilled,
      starIconFilled,
      starIconFilled,
      starIconHalfFilled,
    ];
  }

  return (
    <StyledFigure>
      {starIcons}
      <Content>{`Rating: ${movieRating} / 10 (${movie.vote_count})`}</Content>
    </StyledFigure>
  );
}

const StyledFigure = styled.div`
  fill: var(--highlight-color);
  margin-top: 2rem;
`;

const Content = styled.figcaption`
  color: var(--text-color-light-content);
  padding-left: 0.25rem;
  margin-top: 0.25rem;
`;

const StyledSvg = styled.svg`
  opacity: 0.7;
`;
