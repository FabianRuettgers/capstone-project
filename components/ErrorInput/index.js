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
      <TextWrapper>
        <h2>Dein Film wurde nicht gefunden!</h2>
        <p>
          versuche es erneut oder lasse dich von den aktuellen Trends inspiriren
        </p>
        <div>
          <Button onClick={() => router.push("/")}>
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
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 8fr;
  align-items: center;
  box-shadow: 0 0 12px var(--shadow-color-dark);
  background-color: var(--lowlight-dark);
  border-radius: 2rem;
  padding-bottom: 2rem;
`;

const SvgWrapper = styled.div`
  fill: var(--text-color-dark);
  display: grid;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: var(--highlight-color);
  height: 100%;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
`;

const TextWrapper = styled.div`
  color: var(--text-color-light);
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 2rem;
`;

const Button = styled.button`
  margin: 0;
  padding: 0.5rem;
  border: none;
  background-color: var(--highlight-color);
  fill: var(--text-color-dark);
  border-radius: 50%;
  color: #3a3b3c;
  &:active {
    transform: scale(0.85);
  }
`;
