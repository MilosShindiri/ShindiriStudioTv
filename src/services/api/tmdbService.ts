import { URLS_API } from "../../constants/urls";
import type {
  Movie,
  MovieQueryParams,
  MoviesResponse,
  RawMovieResponse,
} from "../../types/TMDBTypes";
import { parseMovie, parseTMDBResponse } from "../../utils/Parser";
import apiClient from "./apiCLient";

export const tmdbService = {
  getPopularMovies: async (
    params: MovieQueryParams = {}
  ): Promise<MoviesResponse> => {
    const response = await apiClient.get(URLS_API.GET_MOVIES, {
      params: {
        page: params.page ?? 1,
        with_genres: params.genre,
        primary_release_year: params.year,
        query: params.query,
        sort_by: params.sortBy,
      },
    });

    return parseTMDBResponse(response.data);
  },

  getSearchedMovies: async (
    params: MovieQueryParams = {}
  ): Promise<MoviesResponse> => {
    const response = await apiClient.get(URLS_API.GET_SEARCH, {
      params: {
        page: params.page ?? 1,
        query: params.query,
        sort_by: params.sortBy,
      },
    });

    return parseTMDBResponse(response.data);
  },

  getGenres: () => apiClient.get(URLS_API.GET_GENRES).then((res) => res.data),

  getNowPlaying: async (): Promise<Movie[]> => {
    const response = await apiClient.get<RawMovieResponse>(
      URLS_API.GET_NOW_PLAYING
    );
    return response.data.results.map(parseMovie);
  },

  getMovieDetails: (id: number | string) =>
    apiClient.get(URLS_API.GET_MOVIE_DETAILS(id)).then((res) => res.data),

  getSimilarMovies: async (id: number | string): Promise<Movie[]> => {
    const response = await apiClient.get<RawMovieResponse>(
      URLS_API.GET_SIMILAR_MOVIES(id)
    );
    return response.data.results.map(parseMovie);
  },

  getTrending: async (
    timeWindow: "day" | "week" = "day"
  ): Promise<MoviesResponse> => {
    const response = await apiClient.get(
      URLS_API.GET_TRENDING_MOVIES(timeWindow)
    );
    return parseTMDBResponse(response.data);
  },

  getTrendingMultiplePages: async (
    timeWindow: "day" | "week" = "day",
    totalPages: number = 25
  ): Promise<Movie[]> => {
    const requests = Array.from({ length: totalPages }, (_, i) =>
      apiClient.get(URLS_API.GET_TRENDING_MOVIES(timeWindow), {
        params: { page: i + 1 },
      })
    );

    const responses = await Promise.all(requests);

    const allParsed = responses.map((res) => parseTMDBResponse(res.data));
    return allParsed.flatMap((parsed) => parsed.results);
  },

  getTopMoviesByPopularity: async (
    daysAgo: number = 7,
    totalPages: number = 25
  ): Promise<Movie[]> => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    const gteDate = date.toISOString().split("T")[0];

    const requests = Array.from({ length: totalPages }, (_, i) =>
      apiClient.get(URLS_API.GET_MOVIES, {
        params: {
          sort_by: "popularity.desc",
          "primary_release_date.gte": gteDate,
          page: i + 1,
        },
      })
    );

    const responses = await Promise.all(requests);
    const allParsed = responses.map((res) => parseTMDBResponse(res.data));
    return allParsed.flatMap((parsed) => parsed.results);
  },
};
