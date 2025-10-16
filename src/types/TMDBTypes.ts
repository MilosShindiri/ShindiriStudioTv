export interface TMDBPaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface ParsedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface RawMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
}

export interface RawTVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  original_name: string;
  popularity: number;
  origin_country: string[];
}

export interface Movie {
  id: number;
  poster: string | null;
  title: string;
}

export interface TVShow {
  id: number;
  poster: string | null;
  title: string;
}

export interface MovieQueryParams {
  page?: number;
  genre?: number;
  year?: number;
  query?: string;
  sortBy?: string;
  staleTime?: number;
  gcTime?: number;
}

export type RawMovieResponse = TMDBPaginatedResponse<RawMovie>;
export type RawTVResponse = TMDBPaginatedResponse<RawTVShow>;

export type MoviesResponse = ParsedResponse<Movie>;
export type TVShowsResponse = ParsedResponse<TVShow>;

export type RawMediaResponse = RawMovieResponse | RawTVResponse;
export type ParsedMediaResponse = MoviesResponse | TVShowsResponse;
