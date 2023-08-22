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
            heading={"Im Abo enthalten"}
            providerData={data.provider.results.DE.flatrate}
          />
        ) : null}
      </div>
      <div>
        {data.provider.results.DE?.buy ? (
          <ProviderList
            heading={"zum Kaufen"}
            providerData={data.provider.results.DE.buy}
          />
        ) : null}
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: grid;
  gap: var(--gap-medium);
`;
