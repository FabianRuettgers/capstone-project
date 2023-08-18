import { styled } from "styled-components";

export default function FormButton({
  title,
  handleClick,
  backgroundcolor,
  textcolor,
  type,
}) {
  return (
    <StyledButton
      onClick={handleClick}
      backgroundcolor={backgroundcolor}
      textColor={textcolor}
      type={type}
    >
      {title}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundcolor || "white"};
  color: ${(props) => props.textcolor || "black"};
  box-shadow: 0 0 12px var(--shadow-color-dark);
  font-weight: 600;
  text-transform: uppercase;
  width: 40%;
  border-radius: var(--border-radius-medium);
  padding: var(--padding-small);
  &:active {
    transform: scale(0.85);
  }
`;
