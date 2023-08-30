import { color, font } from "@maru/design-token";
import { styled } from "styled-components";
import Input from "./DefaultInput";
import { StyledInputProps } from "./Input.type";

interface ButtonInputProps extends StyledInputProps {
  buttonText: string;
  enabled?: boolean;
  buttonWidth?: string;
  onClick: () => void;
}

const ButtonInput = ({
  width,
  label,
  name,
  value,
  placeholder,
  type = "text",
  onChange,
  buttonText,
  onClick,
  enabled = false,
  readOnly,
  isError = false,
  errorMessage,
}: ButtonInputProps) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <StyledButtonInput>
        <Input
          width={width}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          isError={isError}
          errorMessage={errorMessage}
        />
        <Button onClick={onClick} enabled={enabled}>
          {buttonText}
        </Button>
      </StyledButtonInput>
    </div>
  );
};

export default ButtonInput;

export const StyledButtonInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const Button = styled.button<{ enabled: boolean }>`
  ${font.btn2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.white};
  background-color: ${(props) =>
    props.enabled ? color.gray400 : color.maruDefault};
  pointer-events: ${(props) => props.enabled && "none"};
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
