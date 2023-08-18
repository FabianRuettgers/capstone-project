import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function FooterNav() {
  const router = useRouter();

  return (
    <StyledFooter>
      <MobileViewWrapper>
        <Link href={"/"}>
          <StyledLink isActive={router.pathname === "/"}>
            <StyledSvg
              isActive={router.pathname === "/"}
              xmlns="http://www.w3.org/2000/svg"
              height="64"
              viewBox="0 -960 960 960"
              width="64"
            >
              <path d="m140-800 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18Zm0 212v368h680v-368H140Zm0 0v368-368Z" />
            </StyledSvg>
          </StyledLink>
        </Link>

        <Link href={"/user-list"}>
          <StyledLink isActive={router.pathname === "/user-list"}>
            <StyledSvg
              isActive={router.pathname === "/user-list"}
              xmlns="http://www.w3.org/2000/svg"
              height="64"
              viewBox="0 -960 960 960"
              width="64"
            >
              <path d="m140-800 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18Zm0 212v368h680v-368H140Zm0 0v368-368Z" />
            </StyledSvg>
          </StyledLink>
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
  background-color: var(--background-color);
  fill: var(--text-color-light);
  box-shadow: 0 0 28px var(--shadow-color-dark);
  height: 12vh;
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;

const StyledLink = styled.a`
  fill: ${(props) =>
    props.isActive
      ? "var(--text-color-dark-heading)"
      : "var(--text-color-light)"};
`;

const StyledSvg = styled.svg`
  background-color: ${(props) =>
    props.isActive ? "var(--highlight-color)" : "inherit"};
  padding: var(--padding-x-small);
  border-radius: 50%;
`;
