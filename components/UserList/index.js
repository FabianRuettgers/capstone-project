import { styled } from "styled-components";
import BookmarkedList from "./BookmarkedList";

export default function UserList({ userInformation }) {
  return (
    <StyledMain>
      <BookmarkedList userInformation={userInformation} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: grid;

  margin-left: var(--margin-medium);
  margin-right: var(--margin-medium);

  margin-bottom: 12vh;
  margin-top: 12vh;
`;
