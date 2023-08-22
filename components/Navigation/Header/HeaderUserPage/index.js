import { styled } from "styled-components";

export default function HeaderUserPage({ activeTab, handleTabClick }) {
  return (
    <StyledHeader>
      <MobileViewWrapper>
        <StyledButton
          aria-label="saved movies button"
          onClick={() => handleTabClick("saved")}
          isActive={activeTab === "saved"}
        >
          Gespeicherte Filme
        </StyledButton>
        <StyledButton
          aria-label="watched movies button"
          onClick={() => handleTabClick("watched")}
          isActive={activeTab === "watched"}
        >
          Geschaute Filme
        </StyledButton>
      </MobileViewWrapper>
    </StyledHeader>
  );
}
const MobileViewWrapper = styled.div`
  max-width: 420px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: auto;
  margin-right: auto;
`;

const StyledHeader = styled.header`
  color: var(--text-color-light-heading);
  fill: var(--text-color-light-heading);
  background-color: var(--background-color-dark-content);
  box-shadow: 0 0 28px var(--shadow-color-dark);
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  position: relative;
  top: 12vh;
  gap: var(--gap-small);
`;

const StyledButton = styled.button`
  background-color: transparent;
  color: ${(props) =>
    props.isActive
      ? `var(--text-color-highlight-heading)`
      : "var(--text-color-light-heading)"};
  font-size: large;
  border-bottom: ${(props) =>
    props.isActive ? `4px solid var(--text-color-highlight-heading)` : "none"};
`;
