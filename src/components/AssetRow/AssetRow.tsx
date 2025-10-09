import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useCallback, useRef } from "react";
import { Asset } from "../AssetItem/AssetItem";
import type { ContentRowProps } from "../../types/contentRow";
import { assets } from "../../constants/assets";
import {
  ContentRowScrollingContent,
  ContentRowScrollingWrapper,
  ContentRowTitle,
  ContentRowWrapper,
} from "./AssetRow.styles";

export function ContentRow({ title: rowTitle, onFocus }: ContentRowProps) {
  const { ref, focusKey } = useFocusable({ onFocus });

  const scrollingRef = useRef<HTMLDivElement | null>(null);

  const onAssetFocus = useCallback(({ x }: { x: number }) => {
    if (scrollingRef.current) {
      scrollingRef.current.scrollTo({
        left: x,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <FocusContext.Provider value={focusKey}>
      <ContentRowWrapper ref={ref}>
        <ContentRowTitle>{rowTitle}</ContentRowTitle>
        <ContentRowScrollingWrapper ref={scrollingRef}>
          <ContentRowScrollingContent>
            {assets.map(({ title, color }, index) => (
              <Asset
                index={index}
                title={title}
                key={title}
                color={color}
                onFocus={onAssetFocus}
              />
            ))}
          </ContentRowScrollingContent>
        </ContentRowScrollingWrapper>
      </ContentRowWrapper>
    </FocusContext.Provider>
  );
}
