import styled from "styled-components";
import ProviderImage from "../ProviderImage";

export default function ProviderList({ heading, providerData }) {
  return (
    <>
      <Heading>{heading}</Heading>
      <StyledList>
        {providerData.map((provider) => (
          <StyledListitem key={provider.provider_id}>
            <ProviderImage provider={provider} />
          </StyledListitem>
        ))}
      </StyledList>
    </>
  );
}

const Heading = styled.h2`
  text-align: center;
  color: var(--text-color-light-heading);
  font-size: var(--header-h3);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--text-color-highlight-heading);
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: var(--gap-small);
  gap: 0.5rem;
  column-gap: 0.5rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const StyledListitem = styled.li`
  border-radius: var(--border-radius-small);
`;
