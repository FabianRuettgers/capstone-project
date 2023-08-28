import { styled } from "styled-components";

export default function MovieDescribtion({ movie }) {
  return (
    <article>
      <Content>
        {movie.overview ? movie.overview : "keine Filmbeschreibung vorhanden"}
      </Content>
    </article>
  );
}

const Content = styled.p`
  color: var(--text-color-light-content);
  font-size: var(--big-text);
  text-align: justify;
  margin-top: var(--margin-medium);
  margin-inline: var(--margin-medium);
`;
