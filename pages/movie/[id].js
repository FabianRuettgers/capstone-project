import ErrorFetching from "@/components/ErrorFetching";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import useSWR from "swr";

const API_KEY = process.env.API_KEY;

export default function Detailpage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?language=de&api_key=${API_KEY}`
  );
  if (error) {
    return <div>Error loading data</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return <StyledMain></StyledMain>;
}

const StyledMain = styled.main`
  height: 76vh;
  width: 100%;
  margin-top: 12vh;
  margin-bottom: 12vh;
  display: flex;
  justify-content: center;
`;
