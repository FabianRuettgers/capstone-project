import useSWR from "swr";
import ProviderList from "./ProviderList";
import { styled } from "styled-components";

export default function MovieProvider({ id }) {
  const { data, error } = useSWR(`/api/movie/${id}`);

  if (error) {
    return null;
  }
  if (!data) {
    return null;
  }
  return (
    <>
      {data.provider.results.DE?.flatrate || data.provider.results.DE?.buy ? (
        <StyledSection>
          <div>
            {data.provider.results.DE?.flatrate ? (
              <ProviderList
                heading={"Bei diesen Anbietern  im Abo enthalten"}
                providerData={data.provider.results.DE.flatrate}
              />
            ) : null}
          </div>
          <div>
            {data.provider.results.DE?.buy ? (
              <ProviderList
                heading={"Bei diesen Anbietern zum Kauf erhältlich"}
                providerData={data.provider.results.DE.buy}
              />
            ) : null}
          </div>
        </StyledSection>
      ) : null}
    </>
  );
}

const StyledSection = styled.section`
  display: grid;
  gap: var(--gap-medium);
  margin: var(--margin-medium);
  padding-inline: var(--padding-small);
  padding-top: var(--padding-medium);
  padding-bottom: var(--padding-medium);
  background-color: var(--background-color-dark-content);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  border-radius: var(--border-radius-medium);
`;
