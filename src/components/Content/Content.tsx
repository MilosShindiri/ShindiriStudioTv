import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useCallback } from "react";

import { ContentRow } from "../AssetRow/AssetRow";
import { rows } from "../../constants/rows";
import { ContextWrapper, ScrollingRows } from "./Content.styles";

export function Content() {
  const { ref, focusKey } = useFocusable();

  const onRowFocus = useCallback(
    ({ y }: { y: number }) => {
      ref.current.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
    [ref]
  );

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
