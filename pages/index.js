import ErrorFetching from "@/components/ErrorFetching";
import HeaderNav from "@/components/HeaderNav";
import RandomMovie from "@/components/RandomMovie";
import useSWR from "swr";

const API_KEY = process.env.API_KEY;

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=de&sort_by=popularity.desc&api_key=${API_KEY}`
  );
  if (isLoading) {
    return null;
  }

  if (error || !data || data.success === false) {
    return (
      <>
        <HeaderNav />
        <ErrorFetching />
      </>
    );
  }

  const randomMovie =
    data.results[Math.floor(Math.random() * data.results.length)];
  return (
    <>
      <HeaderNav />
      <RandomMovie randomMovie={randomMovie} />
    </>
  );
}
