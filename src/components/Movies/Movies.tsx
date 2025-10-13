import { useCallback, useEffect, useState } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { Container, ScrollingRows } from "./Movies.styled";
import { rows } from "../../constants/rows";
import { MoviesRow } from "../MovieRow/MovieRow";
import type { Movie } from "../../types/movies";
import { movies } from "../../constants/movies";

export const MoviePage = () => {
  const { ref, focusKey } = useFocusable();
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
    if (!selectedMovie && movies?.length) {
      setSelectedMovie(movies[0]);
    }
  }, [movieRow, selectedMovie]);

  return (
    <FocusContext.Provider value={focusKey}>
      <Container
        style={{
          backgroundImage: selectedMovie
            ? `url(${selectedMovie.background})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Info */}
        {selectedMovie && (
          <div style={{ padding: "64px", color: "white" }}>
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.description}</p>
          </div>
        )}

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
