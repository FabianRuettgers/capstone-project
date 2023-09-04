import { styled } from "styled-components";
import StatisticItem from "./StatisticItem";
import RankingItem from "./RankingItem";

export default function UserStatistics({ userInformation }) {
  const ratedMovies = userInformation.filter(
    (item) => item?.rating !== undefined && item?.rating !== null
  );

  const sortedMoviesHightoLow = ratedMovies.sort((a, b) => b.rating - a.rating);
  const totalWatchtimeMinutes = ratedMovies.reduce(
    (sum, movie) => sum + +movie.watchtime,
    0
  );
  const totalWatchtimeHour = totalWatchtimeMinutes / 60;
  const totalRatings = ratedMovies.reduce(
    (sum, movie) => sum + +movie.rating,
    0
  );
  const averageRating =
    ratedMovies.length > 0 ? totalRatings / ratedMovies.length : 0;

  const howManyBestRatedToShow = 5;

  return (
    <StyledMain>
      <Heading>Gesamt Statistik</Heading>
      {ratedMovies.length ? (
        <StyledStatisticsSection>
          <StatisticItem
            caption={"Geschaute Filme"}
            content={ratedMovies.length}
          />
          <StatisticItem
            caption={"gespeicherte filme"}
            content={
              userInformation.filter((movie) => movie?.isBookmarked).length
            }
          />

          <StatisticItem
            caption={"Beste Bewertung"}
            content={
              sortedMoviesHightoLow[0]
                ? sortedMoviesHightoLow[0].rating
                : "keine Bewertung bisher"
            }
          />
          <StatisticItem
            caption={"Beste Bewertung"}
            content={
              sortedMoviesHightoLow[0]
                ? sortedMoviesHightoLow[0].title
                : "keine Bewertung bisher"
            }
          />
          <StatisticItem
            caption={"Schlechteste Bewertung"}
            content={
              sortedMoviesHightoLow[sortedMoviesHightoLow.length - 1]
                ? sortedMoviesHightoLow[sortedMoviesHightoLow.length - 1].rating
                : "keine Bewertung bisher"
            }
          />
          <StatisticItem
            caption={"Schlechteste Bewertung"}
            content={
              sortedMoviesHightoLow[sortedMoviesHightoLow.length - 1]
                ? sortedMoviesHightoLow[sortedMoviesHightoLow.length - 1].title
                : "keine Bewertung bisher"
            }
          />
          <StatisticItem
            caption={"Durchschnitts Rating"}
            content={averageRating.toFixed(1)}
          />
          <StatisticItem
            caption={"gesamte Watchtime"}
            content={`${totalWatchtimeHour.toFixed(1)} std`}
          />
        </StyledStatisticsSection>
      ) : (
        <StyledFigure>
          <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146.174 116Q413-417 358.5-379.5T278-280h53q22-42 62.173-65t87.5-23Q528-368 567.5-344.5T630-280h52q-25-63-79.826-100-54.826-37-122-37ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z" />
          </StyledSvg>
          <Caption>Keine Statistik gefunden</Caption>
          <StyledErrorParagraph>
            bewerte Filme, damit dir deine Statistik angezeigt wird
          </StyledErrorParagraph>
        </StyledFigure>
      )}

      {sortedMoviesHightoLow.length ? (
        <>
          <Heading>Deine Top {howManyBestRatedToShow}</Heading>
          <StyledRankingSection>
            {sortedMoviesHightoLow
              .slice(0, howManyBestRatedToShow)
              .map((movie, index) => (
                <RankingItem
                  key={movie.id}
                  caption={index + 1}
                  content={movie.title}
                  rating={movie.rating}
                  id={movie.id}
                />
              ))}
          </StyledRankingSection>
        </>
      ) : null}
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
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: var(--gap-x-small);
`;

const StyledRankingSection = styled.section`
  display: grid;
  gap: var(--gap-x-small);
  margin-bottom: var(--margin-medium);
`;

const Heading = styled.h2`
  border-bottom: 2px solid var(--background-color-highlight-content);
  color: var(--text-color-light-heading);
  font-size: var(--header-h2);
  text-align: center;
  margin-top: var(--margin-medium);
  margin-bottom: var(--margin-x-small);
  padding-bottom: var(--margin-x-small);
`;

const StyledFigure = styled.figure`
  text-align: center;
  width: 100%;
  height: 45vh;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: var(--margin-medium);
`;

const StyledSvg = styled.svg`
  fill: var(--text-color-light-heading);
`;

const Caption = styled.figcaption`
  color: var(--text-color-light-heading);

  font-size: var(--header-h2);
  margin-top: var(--margin-small);
`;

const StyledErrorParagraph = styled.p`
  color: var(--text-color-light-content);

  font-size: var(--big-text);
  margin-top: var(--margin-x-small);
`;
