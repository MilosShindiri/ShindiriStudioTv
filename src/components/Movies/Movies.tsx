import { useCallback, useEffect, useMemo, useState } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { Container, Info, ScrollingRows } from "./Movies.styled";

import { MoviesRow } from "../MovieRow/MovieRow";
import type { Movie } from "../../types/movies";
import debounce from "debounce";
import { usePopularMovies } from "../../queries/movies";
import { rows } from "../../constants/rows";
import { Loader } from "../Loader";

export const MoviePage = () => {
  const { ref, focusKey } = useFocusable();
  const { data, isLoading } = usePopularMovies();

  const movies: Movie[] = useMemo(() => data ?? [], [data]);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const debouncedSetSelectedMovie = useMemo(
    () =>
      debounce((movie: Movie) => {
        setSelectedMovie(movie);
      }, 500),
    []
  );

  const onFocusMovie = useCallback(
    (movie: Movie) => {
      if (!hasScrolled) {
        setSelectedMovie(movie);
        setHasScrolled(true);
      } else {
        debouncedSetSelectedMovie(movie);
      }
    },
    [hasScrolled, debouncedSetSelectedMovie]
  );

  const onRowFocus = useCallback(
    ({ y }: { y: number }) => {
      if (ref.current) {
        ref.current.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    },
    [ref]
  );

  const movieRow = rows.find((row) => row.title === "Movies");

  useEffect(() => {
    if (!selectedMovie && movies.length > 0) {
      setSelectedMovie(movies[0]);
    }
  }, [selectedMovie, movies]);

  if (isLoading || !selectedMovie) {
    return <Loader />;
  }

  return (
    <FocusContext.Provider value={focusKey}>
      <Container image={selectedMovie.background}>
        <Info isVisible={true}>
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.description}</p>
        </Info>

        <ScrollingRows ref={ref}>
          <div>
            {movieRow && (
              <MoviesRow
                title={movieRow.title}
                movies={movies}
                onFocus={onRowFocus}
                onFocusMovie={onFocusMovie}
              />
            )}
          </div>
        </ScrollingRows>
      </Container>
    </FocusContext.Provider>
  );
};
