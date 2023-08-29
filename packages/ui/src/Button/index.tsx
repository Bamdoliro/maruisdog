import { color } from "@maru/design-token";
import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import styled from "styled-components";
import { IconAdd, IconShortcuts } from "../assets";
import {
  getButtonPadding,
  getButtonSize,
  getButtonStyle,
} from "./Button.style";
import { ButtonIcon, ButtonOption, ButtonSize } from "./Button.type";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  option?: ButtonOption;
  icon?: ButtonIcon;
  size?: ButtonSize;
  width?: CSSProperties["width"];
}

const Button = ({
  onClick,
  children,
  option = "PRIMARY",
  icon = "NONE",
  size = "MEDIUM",
  width,
  style,
}: Props) => {
  return (
    <StyledButton
      style={{ width, ...style }}
      onClick={onClick}
      option={option}
      icon={icon}
      size={size}
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

export default Button;

const StyledButton = styled.button<{
  option: ButtonOption;
  icon: ButtonIcon;
  size: ButtonSize;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;

  ${(props) => props.icon && getButtonPadding[props.icon]};
  ${(props) => props && getButtonStyle[props.option]};
  ${(props) => props && getButtonSize[props.size]};
`;
