import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { type FC } from "react";
import { MovieBox, MovieName, MovieWrapper } from "./MovieCard.styled";

interface Movie {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  background: string;
}

interface MovieCardProps {
  movie: Movie;
  onSelect: () => void;
  onFocus: (params: { x: number }) => void;
}

export const MovieCard: FC<MovieCardProps> = ({ movie, onFocus }) => {
  const { ref, focused } = useFocusable({ onFocus });

  return (
    <MovieWrapper ref={ref}>
      <MovieBox thumbnail={movie.thumbnail} focused={focused} color="#000" />
      <MovieName>{movie.title}</MovieName>
    </MovieWrapper>
  );
};
