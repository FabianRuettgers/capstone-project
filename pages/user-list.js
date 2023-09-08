import SearchFormButton from "@/components/Buttons/SearchFormButton";
import LoadFetching from "@/components/LoadingHandling/LoadFetching";
import FooterNav from "@/components/Navigation/Footer/FooterNav";
import HeaderNav from "@/components/Navigation/Header/HeaderNav";
import HeaderUserPage from "@/components/Navigation/Header/HeaderUserPage";
import UserList from "@/components/UserList";
import FilteringMoviesForm from "@/components/UserList/FilteringMoviesForm";
import Head from "next/head";
import styled from "styled-components";

export default function userList({
  userInformation,
  handleTabClick,
  currentAction,
  isFetchLoading,
  startFetchLoading,
  handleFilterButtonClick,
  handleFiltering,
  handleResetFilter,
}) {
  return (
    <>
      {isFetchLoading ? (
        <>
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
            <title>Userlist</title>
            <meta name="description" content="a Userlist page" />
          </Head>
          <HeaderNav
            activeTab={currentAction.activeTab}
            handleFilterButtonClick={handleFilterButtonClick}
            currentAction={currentAction}
          />
          <HeaderUserPage
            activeTab={currentAction.activeTab}
            handleTabClick={handleTabClick}
          />
          <MobileViewWrapper>
            <UserList
              userInformation={userInformation}
              activeTab={currentAction.activeTab}
              startFetchLoading={startFetchLoading}
              currentAction={currentAction}
            />
          </MobileViewWrapper>
          <SearchFormButton />
          {currentAction.userInput === "ACTION_FILTER_RATING" ? (
            <FilteringMoviesForm
              handleFilterButtonClick={handleFilterButtonClick}
              handleFiltering={handleFiltering}
              handleResetFilter={handleResetFilter}
            />
          ) : null}

          <FooterNav />
        </>
      ) : null}
    </>
  );
}

const MobileViewWrapper = styled.div`
  max-width: 414px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
`;

const LoadingSection = styled.section`
  height: 92vh;
`;
