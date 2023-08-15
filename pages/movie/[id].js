import DetailMovie from "@/components/DetailMovie";
import HeaderMenu from "@/components/HeaderMenu";
import DetailProvider from "@/components/DetailProvider";
import ErrorFetching from "@/components/ErrorFetching";
import { useRouter } from "next/router";
import useSWR from "swr";

const API_KEY = process.env.API_KEY;

export default function Detailpage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?language=de&api_key=${API_KEY}`
  );

  if (isLoading) {
    return null;
  }

  if (error || !data || data.success === false) {
    return (
      <>
        <HeaderMenu title={"Film Details"} />
        <ErrorFetching />
      </>
    );
  }

  const Movie = data;
  return (
    <>
      <HeaderMenu title={"Film Details"} />
      <DetailMovie movie={Movie} />
      <DetailProvider id={Movie.id} />
    </>
  );
}