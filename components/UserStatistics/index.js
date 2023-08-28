import { styled } from "styled-components";
import StatisticItem from "./StatisticItem";
import RankingItem from "./RankingItem";

export default function UserStatistics({ userInformation }) {
  const ratedMovies = userInformation.filter((item) => item.rating);
  const sortedMoviesHightoLow = ratedMovies.sort((a, b) => b.rating - a.rating);
  const totalWatchtime = ratedMovies.reduce(
    (sum, movie) => sum + +movie.watchtime,
    0
  );
  const totalRatings = ratedMovies.reduce(
    (sum, movie) => sum + +movie.rating,
    0
  );
  const averageRating =
    ratedMovies.length > 0 ? totalRatings / ratedMovies.length : 0;

  return (
    <StyledMain>
      <h2>Gesamt Statistik</h2>
      <StyledStatisticsSection>
        <StatisticItem
          caption={"Geschaute Filme"}
          content={ratedMovies.length}
        />
        <StatisticItem
          caption={"gespeicherte filme"}
          content={userInformation.filter((movie) => movie.isBookmarked).length}
        />
        <StatisticItem
          caption={"Beste Bewertung"}
          content={sortedMoviesHightoLow[0].rating}
        />
        <StatisticItem
          caption={"Beste Bewertung"}
          content={sortedMoviesHightoLow[0].title}
        />
        <StatisticItem
          caption={"Schlechteste Bewertung"}
          content={
            sortedMoviesHightoLow[sortedMoviesHightoLow.length - 1].rating
          }
        />
        <StatisticItem
          caption={"Schlechteste Bewertung"}
          content={
            sortedMoviesHightoLow[sortedMoviesHightoLow.length - 1].title
          }
        />
        <StatisticItem
          caption={"Durchschnitts Rating"}
          content={averageRating.toFixed(2)}
        />
        <StatisticItem
          caption={"gesamte Watchtime"}
          content={`${totalWatchtime} min`}
        />
      </StyledStatisticsSection>
      <h2>Top 5</h2>
      <StyledRankingSection>
        {sortedMoviesHightoLow.slice(0, 5).map((movie, index) => (
          <RankingItem
            key={movie.id}
            caption={index + 1}
            content={movie.title}
            rating={movie.rating}
          />
        ))}
      </StyledRankingSection>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: grid;

  margin-left: var(--margin-medium);
  margin-right: var(--margin-medium);

  margin-bottom: 12vh;
  margin-top: 12vh;
`;

const StyledStatisticsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledRankingSection = styled.section``;
