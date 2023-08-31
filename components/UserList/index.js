import { styled } from "styled-components";
import BookmarkedList from "./BookmarkedList";
import RatedList from "./RatedList";

export default function UserList({
  userInformation,
  activeTab,
  startFetchLoading,
  currentAction,
}) {
  return (
    <StyledMain>
      {activeTab === "saved" ? (
        <BookmarkedList
          userInformation={userInformation}
          startFetchLoading={startFetchLoading}
        />
      ) : (
        <RatedList
          userInformation={userInformation}
          startFetchLoading={startFetchLoading}
          currentAction={currentAction}
        />
      )}
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: var(--margin-medium);
  margin-right: var(--margin-medium);

  margin-bottom: 12vh;
  margin-top: 12vh;
`;
