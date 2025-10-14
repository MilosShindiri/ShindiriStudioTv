import App from "../App";
import { PagePaths } from "./routes_utils";
import { AppLayout } from "./AppLayout";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { MoviesPage } from "../pages/Movies";
import { MovieDetails } from "../pages/MovieDetails";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: PagePaths.HOME, element: <HomePage /> },
          { path: PagePaths.MOVIES, element: <MoviesPage /> },
          // { path: PagePaths.SERIES, element: <SeriesPage /> },
          { path: PagePaths.DETAILS, element: <MovieDetails /> },
        ],
      },
    ],
  },
]);
