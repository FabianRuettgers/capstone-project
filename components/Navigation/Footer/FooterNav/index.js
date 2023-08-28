import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function FooterNav() {
  const router = useRouter();

  return (
    <StyledFooter>
      <MobileViewWrapper>
        <Link
          href={"/"}
          isActivated={router.pathname === "/"}
          aria-label="Get to Spotlight-Page"
        >
          <StyledSvg
            isActivated={router.pathname === "/"}
            xmlns="http://www.w3.org/2000/svg"
            height="64"
            viewBox="0 -960 960 960"
            width="64"
          >
            <path d="m123-240-43-43 292-291 167 167 241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z" />
          </StyledSvg>
        </Link>

        <Link
          href={"/user-list"}
          isActivated={router.pathname === "/user-list"}
          aria-label="Get to User-list-Page"
        >
          <StyledSvg
            isActivated={router.pathname === "/user-list"}
            xmlns="http://www.w3.org/2000/svg"
            height="64"
            viewBox="0 -960 960 960"
            width="64"
          >
            <path d="m140-800 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18Zm0 212v368h680v-368H140Zm0 0v368-368Z" />
          </StyledSvg>
        </Link>

        <Link
          href={"/user-statistics"}
          isActivated={router.pathname === "/user-statistics"}
          aria-label="Get to user-statistics-Page"
        >
          <StyledSvg
            isActivated={router.pathname === "/user-statistics"}
            xmlns="http://www.w3.org/2000/svg"
            height="64"
            viewBox="0 -960 960 960"
            width="64"
          >
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
          </StyledSvg>
        </Link>
      </MobileViewWrapper>
    </StyledFooter>
  );
}

const MobileViewWrapper = styled.div`
  max-width: 420px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
`;

const StyledFooter = styled.footer`
  background-color: var(--background-color-dark-content);
  fill: var(--text-color-light-button);
  box-shadow: 0 0 28px var(--shadow-color-dark);
  height: 12vh;
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;

const StyledSvg = styled.svg`
  fill: ${(props) =>
    props.isActivated
      ? "var(--text-color-dark-button)"
      : "var(--text-color-light-button)"};
  background-color: ${(props) =>
    props.isActivated ? "var(--background-color-highlight-button)" : "inherit"};
  padding: var(--padding-x-small);
  border-radius: 50%;
`;
