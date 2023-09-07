import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function ErrorInput() {
  const router = useRouter();
  return (
    <Container>
      <SvgWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="M453-280h60v-240h-60v240Zm26.982-314q14.018 0 23.518-9.2T513-626q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447-626q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z" />
        </svg>
      </SvgWrapper>
      <StyledFigure>
        <Heading>We couldn&apos;t find your Movie!</Heading>
        <Content>
          try again or discover the new Trends by clicking the button below
        </Content>
        <div>
          <Button
            onClick={() => router.push("/")}
            aria-label="click to get to treding movies"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="m123-240-43-43 292-291 167 167 241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z" />
            </svg>
          </Button>
        </div>
      </StyledFigure>
    </Container>
  );
}

const Container = styled.section`
  background-color: var(--background-color-dark-content);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  display: grid;
  align-items: center;
  border-radius: var(--border-radius-medium);
`;

const SvgWrapper = styled.div`
  background-color: var(--background-color-highlight-content);
  fill: var(--text-color-dark-heading);
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  border-top-right-radius: var(--border-radius-medium);
  border-top-left-radius: var(--border-radius-medium);
  padding: var(--padding-small);
`;

const StyledFigure = styled.figure`
  text-align: center;
  display: grid;
  gap: var(--gap-medium);
  margin-top: var(--margin-medium);
  margin-bottom: var(--margin-medium);
  padding-right: var(--padding-medium);
  padding-left: var(--padding-medium);
`;

const Button = styled.button`
  background-color: var(--background-color-highlight-button);
  fill: var(--text-color-dark-button);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  border-radius: 50%;
  padding: var(--padding-x-small);
  &:active {
    transform: scale(0.85);
  }
`;

const Heading = styled.figcaption`
  color: var(--text-color-light-heading);
  font-size: var(--header-h1);
`;
const Content = styled.p`
  color: var(--text-color-light-content);
  font-size: var(--big-text);
`;
