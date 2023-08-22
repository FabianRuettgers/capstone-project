export default function MovieComments({ MovieComments }) {
  return (
    <>
      {MovieComments.results.map((comment) => (
        <li key={comment.id}>
          <h3>{comment.author}</h3>
          <p>
            erstellt am {comment.created_at.slice(8, 10)}.
            {comment.created_at.slice(5, 7)}.{comment.created_at.slice(0, 4)}
          </p>
          <p>{comment.content}</p>
        </li>
      ))}
    </>
  );
}
