import {
  FocusContext,
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useCallback, useEffect } from "react";

import { ContentRow } from "../AssetRow/AssetRow";
import { rows } from "../../constants/rows";
import { ContextWrapper, ScrollingRows } from "./Content.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { menu } from "../../constants/menu";

export function Content() {
  const { ref, focusKey } = useFocusable();
  const navigate = useNavigate();
  const location = useLocation();
  const onRowFocus = useCallback(
    ({ y }: { y: number }) => {
      ref.current.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
    [ref]
  );

  useEffect(() => {
    if (location.state && location.state?.focusKey) {
      setTimeout(() => {
        setFocus(menu[0].title);
        navigate(location.pathname, {
          replace: true,
          state: {},
        });
      }, 100);
    }
  }, [location, navigate]);

  return (
    <FocusContext.Provider value={focusKey}>
      <ContextWrapper>
        <ScrollingRows ref={ref}>
          <div>
            {rows.map(({ title }) => (
              <ContentRow key={title} title={title} onFocus={onRowFocus} />
            ))}
          </div>
        </ScrollingRows>
      </ContextWrapper>
    </FocusContext.Provider>
  );
}
