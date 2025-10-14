import { useParams } from "react-router-dom";
import { movies } from "../../constants/movies";

export const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <div style={{ color: "white" }}>Movie not found</div>;

  return (
    <div style={{ color: "white", padding: 32 }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <img
        src={movie.background}
        alt={movie.title}
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
};
