import { color } from "@maru/design-token";
import { flex } from "@maru/utils";
import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { styled } from "styled-components";
import { IconAdd, IconShortcuts } from "../assets";
import {
  getButtonPadding,
  getButtonSize,
  getButtonStyle,
} from "./Button.style";
import { ButtonIcon, ButtonOption, ButtonSize } from "./Button.type";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  option?: ButtonOption;
  icon?: ButtonIcon;
  size?: ButtonSize;
  width?: CSSProperties["width"];
  active?: boolean;
}

export const Button = ({
  onClick,
  children,
  option = "PRIMARY",
  icon = "NONE",
  size = "MEDIUM",
  width,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      option={option}
      icon={icon}
      size={size}
      width={width}
    >
      {icon === "ADD_ICON" && (
        <IconAdd color={color.white} width={24} height={24} />
      )}
      {children}
      {icon === "SHORTCUTS_ICON" && (
        <IconShortcuts color={color.white} width={24} height={24} />
      )}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  ${flex({ justifyContent: "center", alignItems: "center" })}
  border-radius: 6px;
  cursor: pointer;
  width: ${({ width }) => width};
  ${({ icon }) => icon && getButtonPadding[icon]};
  ${({ option }) => option && getButtonStyle[option]};
  ${({ size }) => size && getButtonSize[size]};
`;
