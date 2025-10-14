import { useParams, useNavigate, useLocation } from "react-router-dom";
import { movies } from "../../constants/movies";
import { Container } from "./MovieDetails.styled";

import { Poster } from "../Poster";
import { Description } from "../Description";
import { ActionButtons } from "../ActionButtons";
import {
  FocusContext,
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";

export const MoviesDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const movie = movies.find((m) => m.id === Number(id));
  const { ref, focusKey, focusSelf } = useFocusable();
  const navigate = useNavigate();

  useEffect(() => {
    focusSelf();
    setFocus("WATCH_BUTTON");
  }, [focusSelf]);

  if (!movie) return <div style={{ color: "white" }}>Movie not found</div>;

  const handleBack = () => {
    navigate(location.state?.from || "/", {
      state: { focusKey: location.state?.focusKey },
    });
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <Container ref={ref}>
        <Poster image={movie.background} />
        <Description title={movie.title} description={movie.description} />
        <ActionButtons
          onBack={handleBack}
          onWatch={() => alert("Play movie")}
        />
      </Container>
    </FocusContext.Provider>
  );
};
