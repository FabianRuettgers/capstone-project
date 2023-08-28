import SearchFormButton from "@/components/Buttons/SearchFormButton";
import LoadFetching from "@/components/LoadingHandling/LoadFetching";
import FooterNav from "@/components/Navigation/Footer/FooterNav";
import HeaderNav from "@/components/Navigation/Header/HeaderNav";
import HeaderUserPage from "@/components/Navigation/Header/HeaderUserPage";
import UserList from "@/components/UserList";
import Head from "next/head";
import { styled } from "styled-components";

export default function userList({
  userInformation,
  handleTabClick,
  currentAction,
  isFetchLoading,
  startFetchLoading,
}) {
  return (
    <>
      {isFetchLoading ? (
        <>
          <Head>
            <title>Random Movie Spotlight-page</title>
            <meta name="description" content="a random Movie spotlightpage" />
          </Head>
          <HeaderNav />
          <HeaderUserPage
            activeTab={currentAction.activeTab}
            handleTabClick={handleTabClick}
          />
          <LoadingSection>
            <LoadFetching />
          </LoadingSection>
          <FooterNav />
        </>
      ) : null}
      {!isFetchLoading ? (
        <>
          <Head>
            <title>Random Movie Spotlight-page</title>
            <meta name="description" content="a random Movie spotlightpage" />
          </Head>
          <HeaderNav />
          <HeaderUserPage
            activeTab={currentAction.activeTab}
            handleTabClick={handleTabClick}
          />
          <MobileViewWrapper>
            <UserList
              userInformation={userInformation}
              activeTab={currentAction.activeTab}
              startFetchLoading={startFetchLoading}
            />
          </MobileViewWrapper>
          <SearchFormButton />
          <FooterNav />
        </>
      ) : null}
    </>
  );
}

const MobileViewWrapper = styled.div`
  max-width: 420px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
`;

const LoadingSection = styled.section`
  height: 92vh;
`;
