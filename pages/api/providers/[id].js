export default async function handler(request, response) {
  if (request.method === "GET") {
    const { id } = request.query;
    const API_KEY = process.env.API_KEY;

    const url = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`;

    try {
      const providerResponse = await fetch(url);
      const provider = await providerResponse.json();
      response.status(200).json({ results: provider.results });
    } catch (error) {
      response.status(500).json({ message: "Error" });
    }
  } else {
    response.status(405).json({ message: "Method Not Allowed" });
  }
}
