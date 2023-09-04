import Image from "next/image";
import { styled } from "styled-components";

export default function ProviderImage({ provider }) {
  return (
    <Container>
      <StyledImage
        src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
        alt={provider.provider_name}
        width={40}
        height={40}
        objectFit="contain"
        priority
      />
      <Heading>{provider.provider_name}</Heading>
    </Container>
  );
}

const StyledImage = styled(Image)`
  background-color: var(--background-color-highlight-content);
  border-radius: var(--border-radius-x-small);
`;

const Container = styled.figure`
  background-color: var(--background-color-dark-content);
  border-radius: var(--border-radius-x-small);
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Heading = styled.figcaption`
  color: var(--text-color-light-heading);
  font-size: var(--big-text);
`;
