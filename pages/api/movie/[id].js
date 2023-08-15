export default async function handler(request, response) {
  if (request.method === "GET") {
    const { id } = request.query;
    const API_KEY = process.env.API_KEY;

    const url = `https://api.themoviedb.org/3/movie/${id}?language=de&api_key=${API_KEY}`;

    try {
      const movieResponse = await fetch(url);
      const movie = await movieResponse.json();
      response.status(200).json({ result: movie });
    } catch (error) {
      response.status(500).json({ message: "Error" });
    }
  }
}
