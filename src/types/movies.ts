import type {
  FocusableComponentLayout,
  FocusDetails,
} from "@noriginmedia/norigin-spatial-navigation";

export interface Movie {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  background: string;
  genres: string[];
  runtime: number | null;
  releaseYear: string;
  country: string;
  rating: number;
  director: string;
  cast: string[];
}

export interface MoviesRowProps {
  title: string;
  movies: Movie[];
  onFocusMovie: (movie: Movie) => void;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}
