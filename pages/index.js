import RandomMovie from "@/components/RandomMovie";
import useSWR from "swr";

const API_KEY = process.env.API_KEY;

export default function HomePage() {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=de&sort_by=popularity.desc&api_key=${API_KEY}`
  );
  if (!data) {
    return <p>Loading ...</p>;
  }

  if (!data.results || data.results.length === 0) {
    return <p>Error</p>;
  }

  const randomMovie =
    data.results[Math.floor(Math.random() * data.results.length)];

  console.log(randomMovie);
  return <RandomMovie randomMovie={randomMovie} />;
}
