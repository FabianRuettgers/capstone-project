import { styled } from "styled-components";

export default function MovieTitle({ movie }) {
  return <Heading>{movie.title}</Heading>;
}

const Heading = styled.h2`
  color: var(--text-color-light-heading);
  border-bottom: 2px solid var(--highlight-color);
  font-size: xx-large;
  font-weight: 400;

  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: var(--padding-small);
`;
