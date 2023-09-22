import type { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import type {
  button_size_types,
  button_importance_types,
} from "./button.consts";

type ButtonSize = (typeof button_size_types)[number];
type ButtonImportance = (typeof button_importance_types)[number];

type ButtonNativeProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends ButtonNativeProps {
  size?: ButtonSize;
  icon?: ReactNode;
  importance?: ButtonImportance;
  reversed?: boolean;
  rounded?: boolean;
}

type ButtonSizeMap = Record<
  ButtonSize,
  {
    x: string;
    y: string;
  }
>;

type ButtonImportanceMap = Record<
  ButtonImportance,
  {
    wrapper: string;
    icon: string;
  }
>;

export type {
  ButtonProps,
  ButtonSizeMap,
  ButtonSize,
  ButtonImportance,
  ButtonNativeProps,
  ButtonImportanceMap,
};
