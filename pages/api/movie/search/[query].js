export default async function handler(request, response) {
  if (request.method === "GET") {
    const API_KEY = process.env.API_KEY;
    const { query } = request.query;
    console.log(`log`, request.query);

    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=de&api_key=${API_KEY}`;

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
