import StreamingkButton from "@/components/Buttons/StreamingButton";
import styled from "styled-components";

export default function MovieDescribtion({ movie, handleProviderButtonClick }) {
  return (
    <article>
      <Wrapper>
        <Heading>Overview</Heading>
        {movie.provider.results.DE?.flatrate ||
        movie.provider.results.DE?.buy ? (
          <StreamingkButton
            handleProviderButtonClick={handleProviderButtonClick}
          />
        ) : null}
      </Wrapper>
      <Content>{movie.data.overview}</Content>
    </article>
  );
}

const Content = styled.p`
  color: var(--text-color-light-content);
  font-size: var(--big-text);
  text-align: justify;
  margin-top: var(--margin-small);
  margin-inline: var(--margin-medium);
`;

const Heading = styled.h2`
  font-size: var(--header-h2);
  color: var(--text-color-light-content);
`;

const Wrapper = styled.div`
  margin-inline: var(--margin-medium);
  margin-top: var(--margin-medium);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
