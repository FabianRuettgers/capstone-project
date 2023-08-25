import { styled } from "styled-components";

export default function ExitEditCommentButton({ handleExitEditClick }) {
  return <StyledExitButton onClick={handleExitEditClick} />;
}

const StyledExitButton = styled.button`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: black;
  opacity: 0.2;
`;
