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
  font-weight: 400;
  font-size: 13px;

  text-align: justify;
  margin-top: var(--margin-medium);
  margin-inline: var(--margin-medium);
`;
