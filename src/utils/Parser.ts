import type { Movie } from "../types/movies";
import type { RawMovie, RawMovieResponse } from "../types/TMDBTypes";

export const parseMovie = (raw: RawMovie): Movie => {
  const director =
    raw.credits?.crew.find((c) => c.job === "Director")?.name ?? "Unknown";
  const cast = raw.credits?.cast.slice(0, 5).map((actor) => actor.name) ?? [];

  return {
    id: raw.id,
    title: raw.title,
    description: raw.overview || "No description provided.",
    thumbnail: raw.poster_path
      ? `https://image.tmdb.org/t/p/w342${raw.poster_path}`
      : "/images/placeholder-thumbnail.jpg",
    background: raw.backdrop_path
      ? `https://image.tmdb.org/t/p/original${raw.backdrop_path}`
      : "/images/placeholder-background.jpg",
    genres: raw.genres?.map((g) => g.name) ?? [],
    runtime: raw.runtime ?? null,
    releaseYear: raw.release_date?.split("-")[0] ?? "N/A",
    country: raw.production_countries?.[0]?.iso_3166_1 ?? "N/A",
    rating: raw.vote_average ?? 0,
    director,
    cast,
  };
};

export const parseTMDBResponse = (
  response: RawMovieResponse
): { results: Movie[] } => {
  return {
    results: response.results.map(parseMovie),
  };
};
