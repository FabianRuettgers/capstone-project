import FooterNav from "@/components/Navigation/Footer/FooterNav";
import HeaderNav from "@/components/Navigation/Header/HeaderNav";
import UserStatistics from "@/components/UserStatistics";
import Head from "next/head";
import { styled } from "styled-components";

export default function userstatistcs({ userInformation }) {
  return (
    <>
      <Head>
        <title>User Statistics-page</title>
        <meta name="description" content="a random Movie spotlightpage" />
      </Head>
      <HeaderNav />
      <MobileViewWrapper>
        <UserStatistics userInformation={userInformation} />
      </MobileViewWrapper>
      <FooterNav />
    </>
  );
}

const MobileViewWrapper = styled.div`
  max-width: 420px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
`;
