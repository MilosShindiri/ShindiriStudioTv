import type {
  FocusableComponentLayout,
  FocusDetails,
} from "@noriginmedia/norigin-spatial-navigation";

export interface ContentRowProps {
  title: string;

  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}
