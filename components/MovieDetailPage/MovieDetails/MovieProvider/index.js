import useSWR from "swr";
import ProviderList from "./ProviderList";
import { styled } from "styled-components";

export default function MovieProvider({ id }) {
  const { data, error } = useSWR(`/api/providers/${id}`);

  if (error) {
    return null;
  }
  if (!data) {
    return null;
  }

  return (
    <StyledSection>
      <div>
        {data.results.DE?.flatrate ? (
          <ProviderList
            heading={"Im Abo enthalten"}
            providerData={data.results.DE.flatrate}
          />
        ) : null}
      </div>
      <div>
        {data.results.DE?.buy ? (
          <ProviderList
            heading={"zum Kaufen"}
            providerData={data.results.DE.buy}
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
