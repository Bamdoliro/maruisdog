import { flex } from "@maru/utils";
import { CSSProperties, HTMLProps, ReactNode } from "react";
import styled from "styled-components";

export interface FlexProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
}

export const Flex = ({
  children,
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "center",
  gap = "0px",
  ...props
}: FlexProps) => {
  return (
    <StyledFlex
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      {...props}
    >
      {children}
    </StyledFlex>
  );
};

const StyledFlex = styled.div<FlexProps>`
  ${({ flexDirection, alignItems, justifyContent, gap }) =>
    flex({
      flexDirection: flexDirection,
      alignItems: alignItems,
      justifyContent: justifyContent,
      gap: gap,
    })}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
