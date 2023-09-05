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
  width: 100%;
  height: 47vh;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
`;
