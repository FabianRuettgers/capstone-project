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
  padding-bottom: var(--padding-x-small);
  border-bottom: 1px solid var(--text-color-highlight-heading);
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: var(--gap-small);
  gap: var(--gap-x-small);
  column-gap: var(--gap-x-small);
  margin-bottom: var(--margin-medium);
  margin-top: var(--margin-small);
`;

const StyledListitem = styled.li`
  border-radius: var(--border-radius-small);
`;
