import Image from "next/image";
import { styled } from "styled-components";
import useSWR from "swr";

export default function DetailProvider({ id }) {
  const { data, error } = useSWR(`/api/providers/${id}`);

  if (error) {
    return <div>Error loading data</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  const providerData = data.results.DE;
  return (
    <Container>
      {providerData?.flatrate ? (
        <>
          <Heading>Im Abo enthalten</Heading>
          <StyledList>
            {providerData.flatrate.map((provider) => (
              <StyledListitem key={provider.provider_id}>
                <StyledImage
                  src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                  alt={provider.provider_name}
                  width={40}
                  height={40}
                  priority
                />
              </StyledListitem>
            ))}
          </StyledList>
        </>
      ) : null}

      {providerData?.buy ? (
        <>
          <Heading>zum Kaufen</Heading>
          <StyledList>
            {providerData.buy.map((provider) => (
              <StyledListitem key={provider.provider_id}>
                <StyledImage
                  src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                  alt={provider.provider_name}
                  width={40}
                  height={40}
                  priority
                />
              </StyledListitem>
            ))}
          </StyledList>
        </>
      ) : null}
    </Container>
  );
}
const Heading = styled.h2`
  margin-top: 3rem;
  color: var(--text-color-light);
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--highlight-color);
  padding-bottom: 1rem;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 1rem;

  justify-items: center;
`;

const Container = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 12vh;
`;

const StyledListitem = styled.li`
  border-radius: 16px;
`;
const StyledImage = styled(Image)`
  object-fit: contain;
  border-radius: 0.5rem;
`;
