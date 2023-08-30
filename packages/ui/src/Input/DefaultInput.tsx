import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color, font } from "@maru/design-token";
import { IconError } from "../assets";
import ConditionalMessage from "./ConditionalMessage";
import { StyledInputProps } from "./Input.type";

const DefaultInput = ({
  width = "320px",
  type = "text",
  isError = false,
  label,
  onChange,
  textAlign,
  errorMessage,
  message,
  ...props
}: StyledInputProps) => {
  return (
    <div style={{ width }}>
      {label && <Label>{label}</Label>}
      <div style={{ position: "relative" }}>
        <StyledDefaultInput
          onChange={onChange}
          type={type}
          textAlign={textAlign}
          isError={isError}
          {...props}
        />
        {isError && (
          <IconError
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            color={color.red}
            width={24}
          />
        )}
      </div>
      <ConditionalMessage
        isError={isError}
        errorMessage={errorMessage}
        message={message}
      />
    </div>
  );
};

export default DefaultInput;

const StyledDefaultInput = styled.input<StyledInputProps>`
  ${font.p2}
  color: ${color.gray800};
  height: 48px;
  width: 100%;
  padding: 10px 16px;
  background-color: ${color.white};
  border: 1px solid ${color.gray400};
  border-radius: 6px;

  &::placeholder {
    color: ${color.gray500};
  }
  &:focus {
    border: 1px solid ${color.maruDefault};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }

  text-align: ${({ textAlign }) => textAlign};
  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid ${color.red};
      outline: 2px solid rgba(244, 67, 54, 0.25);

      &:focus {
        border: 1px solid ${color.red};
        outline: 2px solid rgba(244, 67, 54, 0.25);
      }
    `}
`;

const Label = styled.p`
  ${font.context}
  color: ${color.gray700};
  margin-bottom: 8px;
`;
