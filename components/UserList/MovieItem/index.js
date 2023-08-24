import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import useSWR from "swr";

export default function MovieItem({ id, date, content, startFetchLoading }) {
  const { data, error, isLoading } = useSWR(`/api/movie/${id}`);

  if (error) {
    return null;
  }

  if (isLoading) {
    return startFetchLoading();
  }

  return (
    <StyledListitem key={data.data.id}>
      <StyledLink href={`/movie/${data.data.id}`}>
        <ImageContainer>
          <StyledImage
            src={`https://image.tmdb.org/t/p/w500${data.data.poster_path}`}
            alt={data.data.title}
            layout="responsive"
            object-fit="contain"
            height={750}
            width={500}
            priority={true}
          />
        </ImageContainer>
        <Heading>{data.data.title}</Heading>
        <StyledParagraph>{date}</StyledParagraph>
        <ContentContainer>{content}</ContentContainer>
      </StyledLink>
    </StyledListitem>
  );
}

const StyledListitem = styled.li`
  background-color: var(--background-color-dark-content);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  margin-bottom: var(--margin-small);
  border-radius: var(--border-radius-small);

  &:last-child {
    margin-bottom: var(--margin-medium);
  }
`;

const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 24% 1fr 15%;
  grid-column-gap: var(--gap-small);
  justify-items: left;
  align-items: center;

  padding: var(--padding-small);
`;

const ImageContainer = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const StyledImage = styled(Image)`
  background-color: var(--background-color-highlight-content);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  border-radius: var(--border-radius-small);
  object-fit: contain;
`;

const Heading = styled.h2`
  color: var(--text-color-light-heading);
  font-size: var(--header-h3);
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  grid-area: 1 / 2 / 2 / 3;
  padding-bottom: var(--padding-small);
`;

const StyledParagraph = styled.p`
  color: var(--text-color-light-content);
  font-size: var(--big-text);
  grid-area: 2 / 2 / 3 / 3;
`;
const ContentContainer = styled.div`
  fill: var(--text-color-light-heading);
  grid-area: 1 / 3 / 3 / 4;
  width: 100%;
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;
