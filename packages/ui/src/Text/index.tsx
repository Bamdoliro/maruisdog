import { font } from "@maru/design-token";
import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type Font = keyof typeof font;

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  color?: string;
  fontType: Font;
  width?: CSSProperties["width"];
  textAlign?: CSSProperties["textAlign"];
  ellipsis?: boolean;
}

export const Text = ({
  children,
  color,
  fontType,
  textAlign,
  width,
  ellipsis = false,
  ...props
}: TextProps) => {
  return (
    <StyledText
      color={color}
      textAlign={textAlign}
      width={width}
      fontType={fontType}
      ellipsis={ellipsis}
      {...props}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<TextProps>`
  ${({ fontType }) => font[fontType]}
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color};
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};
`;
