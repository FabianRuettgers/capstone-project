export default async function handler(request, response) {
  if (request.method === "GET") {
    const API_KEY = process.env.API_KEY;

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en&sort_by=popularity.desc&api_key=${API_KEY}`;

    try {
      const moviesResponse = await fetch(url);
      const movies = await moviesResponse.json();
      response.status(200).json({ results: movies.results });
    } catch (error) {
      response.status(500).json({ message: "Error" });
    }
  } else {
    response.status(405).json({ message: "Method Not Allowed" });
  }
}
