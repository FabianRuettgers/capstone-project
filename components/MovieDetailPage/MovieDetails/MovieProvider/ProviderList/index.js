import { styled } from "styled-components";
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
  color: var(--text-color-light-heading);
  border-bottom: 2px solid var(--highlight-color);

  margin-bottom: var(--margin-medium);
  padding-bottom: var(--padding-small);
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
  justify-items: center;
`;

const StyledListitem = styled.li`
  border-radius: var(--border-radius-small);
`;
