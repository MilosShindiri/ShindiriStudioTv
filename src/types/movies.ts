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
}

export interface MoviesRowProps {
  title: string;
  onFocusMovie: (movie: Movie) => void;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}
