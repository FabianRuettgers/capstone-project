export default async function handler(request, response) {
  if (request.method === "GET") {
    const amountOfQuestions = 15;
    try {
      const moviesResponse = await fetch(
        `https://opentdb.com/api.php?amount=${amountOfQuestions}&category=11&type=multiple`
      );
      const movies = await moviesResponse.json();
      response.status(200).json({ results: movies.results });
    } catch (error) {
      response.status(500).json({ message: "Error" });
    }
  } else {
    response.status(405).json({ message: "Method Not Allowed" });
  }
}
