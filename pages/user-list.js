import SearchFormButton from "@/components/Buttons/SearchFormButton";
import FooterNav from "@/components/Navigation/Footer/FooterNav";
import HeaderNav from "@/components/Navigation/Header/HeaderNav";
import HeaderUserPage from "@/components/Navigation/Header/HeaderUserPage";
import UserList from "@/components/UserList";
import Head from "next/head";
import { useState } from "react";
import { styled } from "styled-components";

function UseError() {
  const [isError, setIsError] = useState(false);
}

export default function userList({
  userInformation,
  activeTab,
  handleTabClick,
}) {
  return (
    <>
      <Head>
        <title>Random Movie Spotlight-page</title>
        <meta name="description" content="a random Movie spotlightpage" />
      </Head>
      <HeaderNav />
      <HeaderUserPage activeTab={activeTab} handleTabClick={handleTabClick} />
      <MobileViewWrapper>
        <UserList userInformation={userInformation} activeTab={activeTab} />
      </MobileViewWrapper>
      <SearchFormButton />
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
