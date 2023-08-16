import { useState } from "react";
import { styled } from "styled-components";

export default function ButtonSection({
  id,
  bookmarkedMovies,
  setBookmarkedMovies,
}) {
  function handleBookmark() {
    setBookmarkedMovies((prevBookmarkedMovies) => ({
      ...prevBookmarkedMovies,
      [id]: !prevBookmarkedMovies[id],
    }));
  }

  const isBookmarked = bookmarkedMovies[id] || false;

  console.log("bookmarkedMovies", bookmarkedMovies);
  return (
    <Container>
      <div>
        <StyledButton onClick={handleBookmark}>
          {isBookmarked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M200-120v-665q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480-240 200-120Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M200-120v-665q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480-240 200-120Zm60-91 220-93 220 93v-574H260v574Zm0-574h440-440Z" />
            </svg>
          )}
        </StyledButton>
      </div>
    </Container>
  );
}

const StyledButton = styled.button`
  margin: 0;
  padding: 0.5rem;
  border: none;
  background-color: var(--highlight-color);
  fill: var(--text-color-dark);
  border-radius: 50%;
  color: #3a3b3c;
  &:active {
    transform: scale(0.85);
  }
`;

const Container = styled.div`
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--highlight-color);
  padding-bottom: 2rem;
  display: grid;
  justify-content: space-around;
  align-items: center;
`;
