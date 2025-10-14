import {
  FocusContext,
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useCallback, useEffect, useRef } from "react";
import type { Movie, MoviesRowProps } from "../../types/movies";
import { MovieCard } from "../MovieCard/MovieCard";
import { movies } from "../../constants/movies";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MovieRowScrollingContent,
  MovieRowScrollingWrapper,
  MovieRowWrapper,
} from "./MovieRow.styled";

export function MoviesRow({ onFocus, onFocusMovie }: MoviesRowProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const preferredChildFocusKey = location.state?.focusKey;

  const { ref, focusKey } = useFocusable({ onFocus, preferredChildFocusKey });

  const scrollingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (preferredChildFocusKey) {
      setFocus(preferredChildFocusKey);
    }
  }, [preferredChildFocusKey]);

  const onAssetFocus = useCallback(
    ({ x, movie, focusKey }: { x: number; movie: Movie; focusKey: string }) => {
      if (scrollingRef.current) {
        scrollingRef.current.scrollTo({
          left: x,
          behavior: "auto",
        });
      }
      onFocusMovie?.(movie);

      navigate(".", {
        replace: true,
        state: { ...location.state, focusKey },
      });
    },
    [onFocusMovie, navigate, location.state]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <MovieRowWrapper ref={ref}>
        <MovieRowScrollingWrapper ref={scrollingRef}>
          <MovieRowScrollingContent>
            {movies.map((movie) => {
              const movieFocusKey = `movie-${movie.id}`;
              return (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  focusKey={movieFocusKey}
                  onSelect={() =>
                    navigate(`/movie/${movie.id}`, {
                      state: {
                        from: location.pathname,
                        focusKey: movieFocusKey,
                      },
                    })
                  }
                  onFocus={(layout) =>
                    onAssetFocus({
                      x: layout.x,
                      movie,
                      focusKey: movieFocusKey,
                    })
                  }
                />
              );
            })}
          </MovieRowScrollingContent>
        </MovieRowScrollingWrapper>
      </MovieRowWrapper>
    </FocusContext.Provider>
  );
}
