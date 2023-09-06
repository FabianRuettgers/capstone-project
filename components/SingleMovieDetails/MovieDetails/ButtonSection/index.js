import { styled } from "styled-components";
import BookmarkButton from "../../../Buttons/BookmarkButton";
import RateButton from "@/components/Buttons/RateButton";
import DeleteButton from "@/components/Buttons/DeleteButton";
import CommentButton from "@/components/Buttons/CommentButton";

export default function ButtonSection({
  id,
  userInformation,
  handleBookmarkToggle,
  handleRateButtonClick,
  handleDeleteButtonClick,
  handleCommentButtonClick,
}) {
  const selectedItem = userInformation.find((item) => item?.id === id);
  const isBookmarked = selectedItem ? selectedItem.isBookmarked : false;
  const israted = selectedItem ? selectedItem.rating : false;

  let status = `unwatched`;
  let statusSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M424-320q0-81 14.5-116.5T500-514q41-36 62.5-62.5T584-637q0-41-27.5-68T480-732q-51 0-77.5 31T365-638l-103-44q21-64 77-111t141-47q105 0 161.5 58.5T698-641q0 50-21.5 85.5T609-475q-49 47-59.5 71.5T539-320H424Zm56 240q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Z" />
    </svg>
  );

  if (isBookmarked) {
    status = "To watch";
    statusSvg = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
      </svg>
    );
  }
  if (israted) {
    status = "Finished";
    statusSvg = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>
    );
  }

  return (
    <SectionContainer>
      <MovieStatus>
        {statusSvg}
        {status}
      </MovieStatus>
      <Buttons>
        {israted ? null : (
          <BookmarkButton
            id={id}
            isBookmarked={isBookmarked}
            handleBookmarkToggle={handleBookmarkToggle}
          />
        )}

        {israted ? null : (
          <RateButton handleRateButtonClick={handleRateButtonClick} />
        )}

        {israted ? (
          <DeleteButton handleDeleteButtonClick={handleDeleteButtonClick} />
        ) : null}
        <CommentButton handleCommentButtonClick={handleCommentButtonClick} />
      </Buttons>
    </SectionContainer>
  );
}
const SectionContainer = styled.section`
  border-bottom: 2px solid var(--highlight-color);
  margin-top: var(--margin-medium);
  padding-bottom: 1rem;
  margin-inline: var(--margin-medium);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  align-items: center;
`;

const MovieStatus = styled.p`
  background-color: var(--background-color-highlight-content);
  color: var(--text-color-dark-heading);
  fill: var(--text-color-dark-heading);
  font-size: var(--header-h2);
  padding: 0.7rem;
  border-radius: 2rem;
  display: flex;
  gap: 0.5rem;
`;
