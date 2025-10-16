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
  focusKey: string;
  onSelect: () => void;
  onFocus: (layout: { x: number }) => void;
}
const truncateTitle = (title: string, maxWords: number = 5): string => {
  const words = title.split(" ");
  if (words.length <= maxWords) return title;
  return words.slice(0, maxWords).join(" ") + "...";
};
export const MovieCard: FC<MovieCardProps> = ({
  movie,
  focusKey,
  onSelect,
  onFocus,
}) => {
  const { ref, focused } = useFocusable({
    focusKey,
    onFocus: onFocus,
    onEnterPress: onSelect,
  });

  return (
    <MovieWrapper ref={ref}>
      <MovieBox thumbnail={movie.thumbnail} focused={focused} color="#000" />
      <MovieName focused={focused} color="#FFFFFF99">
        {truncateTitle(movie.title)}
      </MovieName>
    </MovieWrapper>
  );
};
