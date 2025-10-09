import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { AssetProps } from "../../types/assets";
import { AssetBox, AssetTitle, AssetWrapper } from "./AssetItem.styles";

export function Asset({ title, color, onFocus, index }: AssetProps) {
  const { ref, focused } = useFocusable({
    onFocus,
    extraProps: {
      title,
      color,
    },
  });

  return (
    <AssetWrapper ref={ref}>
      <AssetBox index={index} color={color} focused={focused} />
      <AssetTitle>{title}</AssetTitle>
    </AssetWrapper>
  );
}
