import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { Button, ButtonsWrapper } from "./ActionButtons.styled";

export const ActionButtons = ({
  onBack,
  onWatch,
}: {
  onBack: () => void;
  onWatch: () => void;
}) => {
  const back = useFocusable({ onEnterPress: onBack, focusKey: "BACK_BUTTON" });
  const watch = useFocusable({
    onEnterPress: onWatch,
    focusKey: "WATCH_BUTTON",
  });
  const { ref, focusKey } = useFocusable();

  return (
    <FocusContext.Provider value={focusKey}>
      <ButtonsWrapper ref={ref}>
        <Button ref={back.ref} focused={back.focused}>
          Back
        </Button>
        <Button ref={watch.ref} focused={watch.focused}>
          Watch Now
        </Button>
      </ButtonsWrapper>
    </FocusContext.Provider>
  );
};
