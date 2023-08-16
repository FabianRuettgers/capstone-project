import { styled } from "styled-components";

export default function MovieDescribtion({ movie }) {
  return (
    <figure>
      <Heading>Filmbeschreibung</Heading>
      <Content>
        {movie.overview ? movie.overview : "keine Filmbeschreibung vorhanden"}
      </Content>
    </figure>
  );
}

const Heading = styled.figcaption`
  color: var(--text-color-light-heading);
  font-size: x-large;
  font-weight: 00;
`;

const Content = styled.p`
  color: var(--text-color-light-content);
  font-weight: 100;
  font-size: medium;

  text-align: justify;
  margin-top: var(--margin-small);
`;
