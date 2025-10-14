import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useCallback, useRef } from "react";
import type { Movie, MoviesRowProps } from "../../types/movies";
import { MovieCard } from "../MovieCard/MovieCard";
import { movies } from "../../constants/movies";
import { useNavigate } from "react-router-dom";
import {
  MovieRowScrollingContent,
  MovieRowScrollingWrapper,
  MovieRowWrapper,
} from "./MovieRow.styled";

export function MoviesRow({ onFocus, onFocusMovie }: MoviesRowProps) {
  const { ref, focusKey } = useFocusable({ onFocus });

  const navigate = useNavigate();
  const scrollingRef = useRef<HTMLDivElement | null>(null);

  const onAssetFocus = useCallback(
    ({ x, movie }: { x: number; movie: Movie }) => {
      if (scrollingRef.current) {
        scrollingRef.current.scrollTo({
          left: x,
          behavior: "auto",
        });
      }
      onFocusMovie?.(movie);
    },
    [onFocusMovie]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <MovieRowWrapper ref={ref}>
        <MovieRowScrollingWrapper ref={scrollingRef}>
          <MovieRowScrollingContent>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelect={() => navigate(`/movie/${movie.id}`)}
                onFocus={(layout) => onAssetFocus({ x: layout.x, movie })}
              />
            ))}
          </MovieRowScrollingContent>
        </MovieRowScrollingWrapper>
      </MovieRowWrapper>
    </FocusContext.Provider>
  );
}
