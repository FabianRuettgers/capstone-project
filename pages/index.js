import useSWR from "swr";

const API_KEY = process.env.API_KEY;

export default function HomePage() {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=de&sort_by=popularity.desc&api_key=${API_KEY}`
  );

  console.log(data);
  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
