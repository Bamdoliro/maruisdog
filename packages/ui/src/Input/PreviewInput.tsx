import { color, font } from "@maru/design-token";
import { flex } from "@maru/utils";
import { useState } from "react";
import { css, styled } from "styled-components";
import { IconInvisibleEye, IconVisibleEye } from "../assets";
import ConditionalMessage from "./ConditionalMessage";
import { StyledInputProps } from "./Input.type";

export const PreviewInput = ({
  width = "320px",
  label,
  errorMessage,
  message,
  isError = false,
  onChange,
  ...props
}: StyledInputProps) => {
  const [isPreview, setIsPreview] = useState(false);

  const toggleIsPreview = () => setIsPreview((prev) => !prev);

  return (
    <div style={{ width }}>
      {label && <Label>{label}</Label>}
      <div style={{ position: "relative" }}>
        <StyledPreviewInput isError={isError}>
          <Input
            onChange={onChange}
            type={isPreview ? "text" : "password"}
            {...props}
          />
          {isPreview ? (
            <IconVisibleEye
              color={color.gray500}
              width={24}
              height={24}
              cursor="pointer"
              onClick={toggleIsPreview}
            />
          ) : (
            <IconInvisibleEye
              color={color.gray500}
              width={24}
              height={24}
              cursor="pointer"
              onClick={toggleIsPreview}
            />
          )}
        </StyledPreviewInput>
      </div>
      <ConditionalMessage
        isError={isError}
        errorMessage={errorMessage}
        message={message}
      />
    </div>
  );
};

const StyledPreviewInput = styled.div<StyledInputProps>`
  ${flex({ alignItems: "center", justifyContent: "space-between" })}
  gap: 10px;
  height: 48px;
  padding: 10px 16px;
  background-color: ${color.white};
  border: 1px solid ${color.gray400};
  border-radius: 6px;

  &:focus-within {
    border: 1px solid
      ${({ isError }) => (isError ? color.red : color.maruDefault)};
    ${({ isError }) =>
      !isError &&
      css`
        outline: 2px solid rgba(20, 112, 255, 0.25);
      `}
  }

  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid ${color.red};
      outline: 2px solid rgba(244, 67, 54, 0.25);

      &:focus {
        border: 1px solid ${color.red};
      }
    `}
`;

const Input = styled.input`
  ${font.p2}
  color: ${color.gray800};
  width: 100%;
  height: 100%;

  &::placeholder {
    color: ${color.gray500};
  }
`;

const Label = styled.p`
  ${font.context}
  color: ${color.gray700};
  margin-bottom: 8px;
`;
