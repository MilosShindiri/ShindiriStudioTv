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
  onFocus: (layout: { x: number }) => void;
}

export const MovieCard: FC<MovieCardProps> = ({ movie, onSelect, onFocus }) => {
  const { ref, focused } = useFocusable({
    onFocus: onFocus,
    onEnterPress: onSelect,
  });

  return (
    <MovieWrapper ref={ref}>
      <MovieBox thumbnail={movie.thumbnail} focused={focused} color="#000" />
      <MovieName focused={focused} color="#FFFFFF99">
        {movie.title}
      </MovieName>
    </MovieWrapper>
  );
};
