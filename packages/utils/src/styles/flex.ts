import type { CSSProperties } from "react";
import { css } from "styled-components";

interface Props {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
}

const flex = ({
  flexDirection = "row",
  justifyContent,
  alignItems,
  gap,
}: Props) => {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    gap: ${gap};
  `;
};

export default flex;
