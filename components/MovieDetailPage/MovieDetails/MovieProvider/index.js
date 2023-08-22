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
  console.log(data.provider.results.DE);
  return (
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
  );
}

const StyledSection = styled.section`
  display: grid;
  gap: 2rem;
  margin: 2rem;
  padding-inline: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: var(--background-color);
  box-shadow: 0 0 24px var(--shadow-color-dark);

  border-radius: 2rem;
`;
