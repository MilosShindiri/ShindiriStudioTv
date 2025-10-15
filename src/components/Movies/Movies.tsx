import { useCallback, useEffect, useState } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { Container, Info, ScrollingRows } from "./Movies.styled";
import { rows } from "../../constants/rows";
import { MoviesRow } from "../MovieRow/MovieRow";
import type { Movie } from "../../types/movies";
import { movies } from "../../constants/movies";
import { useLocation } from "react-router-dom";

export const MoviePage = () => {
  const { ref, focusKey } = useFocusable();
  const location = useLocation();

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const onRowFocus = useCallback(
    ({ y }: { y: number }) => {
      ref.current.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
    [ref]
  );

  const movieRow = rows.find((row) => row.title === "Movies");

  useEffect(() => {
    const focusKey = location.state?.focusKey;
    if (focusKey) {
      const idString = focusKey.split("-")[1];
      const movie = movies.find((m) => m.id === Number(idString));
      if (movie) {
        setSelectedMovie(movie);
        return;
      }
    }

    if (!selectedMovie && movies.length > 0) {
      setSelectedMovie(movies[0]);
    }
  }, [location.state?.focusKey, selectedMovie]);

  return (
    <FocusContext.Provider value={focusKey}>
      <Container image={selectedMovie?.background ?? null}>
        <Info isVisible={!!selectedMovie}>
          <h2>{selectedMovie?.title ?? ""}</h2>
          <p>{selectedMovie?.description ?? ""}</p>
        </Info>

        <ScrollingRows ref={ref}>
          <div>
            {movieRow && (
              <MoviesRow
                title={movieRow.title}
                onFocus={onRowFocus}
                onFocusMovie={(movie) => setSelectedMovie(movie)}
              />
            )}
          </div>
        </ScrollingRows>
      </Container>
    </FocusContext.Provider>
  );
};
