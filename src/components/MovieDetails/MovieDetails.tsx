import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  DescriptionText,
  InfoRow,
  Left,
  Meta,
  PosterImage,
  Right,
  Title,
} from "./MovieDetails.styled";
import { ActionButtons } from "../ActionButtons";
import {
  FocusContext,
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";

import { Loader } from "../Loader";
import { useMovieDetails } from "../../queries/movies";

export const MoviesDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { ref, focusKey, focusSelf } = useFocusable();

  const { data: movie, isLoading, error } = useMovieDetails(id!);

  useEffect(() => {
    if (movie) {
      focusSelf();

      const raf = requestAnimationFrame(() => {
        setFocus("WATCH_BUTTON");
      });

      return () => cancelAnimationFrame(raf);
    }
  }, [movie, focusSelf]);

  const handleBack = () => {
    navigate(location.state?.from || "/", {
      state: { focusKey: location.state?.focusKey },
    });
  };

  if (isLoading) return <Loader />;

  if (error || !movie) {
    return <div style={{ color: "white" }}>Movie not found</div>;
  }

  return (
    <FocusContext.Provider value={focusKey}>
      <Container ref={ref}>
        <Left>
          <PosterImage src={movie.thumbnail} alt={movie.title} />
          <Meta>
            <div>{movie.genres.join(", ")}</div>
            <div>{movie.runtime} Minutes</div>
            <div>
              {movie.country} - {movie.releaseYear} - IMDb: {movie.rating}
            </div>
          </Meta>
        </Left>

        <Right>
          <Title>{movie.title}</Title>

          <DescriptionText>{movie.description}</DescriptionText>

          <InfoRow>
            <strong>Director:</strong> {movie.director}
          </InfoRow>

          <InfoRow>
            <strong>Cast:</strong> {movie.cast.join(", ")}
          </InfoRow>

          <ActionButtons
            onBack={handleBack}
            onWatch={() => alert("Play movie")}
          />
        </Right>
      </Container>
    </FocusContext.Provider>
  );
};
