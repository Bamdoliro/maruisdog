import { color, font } from "@maru/design-token";
import { flex } from "@maru/utils";
import styled from "styled-components";
import { DefaultInput } from "../Input/DefaultInput";
import { StyledInputProps } from "../Input/Input.type";

export interface ButtonInputProps extends StyledInputProps {
  buttonText: string;
  enabled?: boolean;
  buttonWidth?: string;
  onClick: () => void;
}

export const ButtonInput = ({
  type = "text",
  enabled = false,
  isError = false,
  width = "100%",
  label,
  onChange,
  buttonText,
  onClick,
  errorMessage,
  ...props
}: ButtonInputProps) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <StyledButtonInput>
        <DefaultInput
          width={width}
          type={type}
          onChange={onChange}
          isError={isError}
          errorMessage={errorMessage}
          {...props}
        />
        <Button onClick={onClick} enabled={enabled}>
          {buttonText}
        </Button>
      </StyledButtonInput>
    </div>
  );
};

export const StyledButtonInput = styled.div`
  ${flex({ alignItems: "center" })}
  gap: 8px;
  width: 100%;
`;

export const Button = styled.button<{ enabled: boolean }>`
  ${font.btn2};
  color: ${color.white};
  background-color: ${(props) =>
    props.enabled ? color.gray400 : color.maruDefault};
  pointer-events: ${(props) => props.enabled && "none"};
  ${flex({ alignItems: "center", justifyContent: "center" })}
  border-radius: 6px;
  height: 48px;
  padding: 10px 20px;
  flex-shrink: 0;

  &:hover {
    background-color: ${(props) =>
      props.enabled ? color.gray400 : color.maruHoverd};
    cursor: ${(props) => (props.enabled ? "default" : "pointer")};
  }
`;

const Label = styled.p`
  ${font.context}
  color: ${color.gray700};
  margin-bottom: 8px;
`;
