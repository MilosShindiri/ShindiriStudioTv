import type {
  Movie,
  MoviesResponse,
  ParsedMediaResponse,
  RawMediaResponse,
  RawMovie,
  RawMovieResponse,
  RawTVResponse,
  RawTVShow,
  TVShow,
  TVShowsResponse,
} from "../types/TMDBTypes";

const isMovieResponse = (
  response: RawMediaResponse
): response is RawMovieResponse => {
  return response.results.length > 0 && "title" in response.results[0];
};

const isTVResponse = (
  response: RawMediaResponse
): response is RawTVResponse => {
  return response.results.length > 0 && "name" in response.results[0];
};

export const parseTMDBResponse = <T extends RawMediaResponse>(
  rawResponse: T
): ParsedMediaResponse => {
  if (isMovieResponse(rawResponse)) {
    return {
      page: rawResponse.page,
      total_pages: rawResponse.total_pages,
      total_results: rawResponse.total_results,
      results: rawResponse.results.map(parseMovie),
    } as MoviesResponse;
  }

  if (isTVResponse(rawResponse)) {
    return {
      page: rawResponse.page,
      total_pages: rawResponse.total_pages,
      total_results: rawResponse.total_results,
      results: rawResponse.results.map(parseTVShow),
    } as TVShowsResponse;
  }

  throw new Error(
    "Unknown TMDB response structure. Check API or update parser."
  );
};

export const parseMovie = (raw: RawMovie): Movie => ({
  id: raw.id,
  title: raw.title,
  poster: raw.poster_path,
});

export const parseTVShow = (raw: RawTVShow): TVShow => ({
  id: raw.id,
  title: raw.name,
  poster: raw.poster_path,
});
