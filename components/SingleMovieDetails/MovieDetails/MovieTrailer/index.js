import React from "react";
import styled from "styled-components";

export default function MovieTrailer({ videoId }) {
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
  margin-top: var(--margin-medium);
  margin-inline: var(--margin-medium);
  display: flex;
  justify-content: center;
  align-content: center;
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
  height: 24vh;
  border-radius: var(--border-radius-small);
`;
