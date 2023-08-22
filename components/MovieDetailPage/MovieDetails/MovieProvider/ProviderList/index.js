import { styled } from "styled-components";
import ProviderImage from "../ProviderImage";

export default function ProviderList({ heading, providerData }) {
  let gridColumns = 5;
  console.log(providerData.length);
  if (providerData.length > 5) {
    gridColumns = "repeat(5, 1fr)";
  } else {
    gridColumns = `repeat(${providerData.length}, 1fr)`;
  }
  return (
    <>
      <Heading>{heading}</Heading>
      <StyledList gridColumns={gridColumns}>
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
  font-size: 15px;
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: ${(props) => props.gridColumns};
  grid-row-gap: 1rem;
  justify-items: center;
  margin-top: 1rem;
`;

const StyledListitem = styled.li`
  border-radius: var(--border-radius-small);
`;
