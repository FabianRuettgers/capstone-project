import FooterNav from "@/components/Navigation/Footer/FooterNav";
import HeaderNav from "@/components/Navigation/Header/HeaderNav";
import Head from "next/head";
import { styled } from "styled-components";

export default function userList() {
  return (
    <>
      <Head>
        <title>Random Movie Spotlight-page</title>
        <meta name="description" content="a random Movie spotlightpage" />
      </Head>
      <HeaderNav />
      <MobileViewWrapper></MobileViewWrapper>
      <FooterNav></FooterNav>
    </>
  );
}

const MobileViewWrapper = styled.div`
  max-width: 420px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
`;
