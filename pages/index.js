import Image from "next/image";
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
  return (
    <main>
      <div>
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
            alt="Movie Poster"
            width={400}
            height={400}
          />

          <p>{randomMovie.vote_average} / 10</p>
          <div>
            <button></button>
          </div>
        </div>
      </div>
    </main>
  );
}
