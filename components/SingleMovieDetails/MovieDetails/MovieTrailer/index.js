import React from "react";
import styled from "styled-components";

export default function MovieTrailer({ movie }) {
  const videoId = movie.videos.results[0].key;

  return (
    <StyledSection>
      <ResponsiveIframe
        title={`YouTube Video ${videoId}`}
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin-top: 2rem;
  margin-inline: 2rem;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
  height: 24vh;
  border-radius: 1rem;
`;
