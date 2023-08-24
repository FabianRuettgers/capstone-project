import Image from "next/image";
import { styled } from "styled-components";

export default function ProviderImage({ provider }) {
  return (
    <StyledImage
      src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
      alt={provider.provider_name}
      width={40}
      height={40}
      objectFit="contain"
      priority
    />
  );
}

const StyledImage = styled(Image)`
  background-color: var(--background-color-highlight-content);
  border-radius: var(--border-radius-x-small);
`;
