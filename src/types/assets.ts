import type {
  FocusableComponentLayout,
  FocusDetails,
} from "@noriginmedia/norigin-spatial-navigation";

export interface AssetProps {
  index: number;
  title: string;
  color: string;

  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}
