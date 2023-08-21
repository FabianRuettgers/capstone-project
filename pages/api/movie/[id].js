export default async function handler(request, response) {
  if (request.method === "GET") {
    const { id } = request.query;
    const API_KEY = process.env.API_KEY;

    const dataUrl = `https://api.themoviedb.org/3/movie/${id}?language=de&api_key=${API_KEY}`;
    const imageUrl = `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=de&language=de&api_key=${API_KEY}`;
    const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?language=de&api_key=${API_KEY}`;
    const providerUrl = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`;
    const similarMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/similar?language=de&page=1&api_key=${API_KEY}`;
    const reviewsUrl = `https://api.themoviedb.org/3/movie/${id}/reviews?language=de&api_key=${API_KEY}`;
    const releaseDatesUrl = `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${API_KEY}`;

    try {
      const movieResponse = await fetch(dataUrl);
      const imageResponse = await fetch(imageUrl);
      const providerResponse = await fetch(providerUrl);
      const videoResponse = await fetch(videoUrl);
      const similarMoviesResponse = await fetch(similarMoviesUrl);
      const reviewsResponse = await fetch(reviewsUrl);
      const releaseDatesResponse = await fetch(releaseDatesUrl);

      const responses = [
        movieResponse,
        imageResponse,
        providerResponse,
        videoResponse,
        similarMoviesResponse,
        reviewsResponse,
        releaseDatesResponse,
      ];

      const responseData = {};

      for (const [index, res] of responses.entries()) {
        if (res.ok) {
          responseData[
            [
              "data",
              "images",
              "provider",
              "videos",
              "similarMovies",
              "reviews",
              "releaseDates",
            ][index]
          ] = await res.json();
        }
      }

      response.status(200).json(responseData);
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Error fetching data from TMDb" });
    }
  } else {
    response.status(405).json({ message: "Method Not Allowed" });
  }
}
