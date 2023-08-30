import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color, font } from "@maru/design-token";
import { useRef } from "react";
import { StyledInputProps } from "./Input.type";

const NumberInput = ({
  name,
  width = "80px",
  textAlign = "center",
  onChange,
  placeholder,
  value = 0,
  isError = false,
}: StyledInputProps) => {
  const numberInputRef = useRef<HTMLInputElement>(null);

  const handleSelectAllClick = () => {
    if (numberInputRef.current) {
      numberInputRef.current.select();
    }
  };

  return (
    <StyledNumberInput
      ref={numberInputRef}
      name={name}
      width={width}
      textAlign={textAlign}
      onChange={onChange}
      onClick={handleSelectAllClick}
      type="number"
      value={value}
      placeholder={placeholder}
      isError={isError}
      min={0}
    />
  );
};

export default NumberInput;

const StyledNumberInput = styled.input<StyledInputProps>`
  ${font.p2}
  height: 40px;
  border-radius: 6px;
  border: 1px solid ${color.gray400};
  background: ${color.white};
  color: ${color.gray900};

  &::placeholder {
    color: ${color.gray500};
  }

  &:focus {
    border: 1px solid ${color.maruDefault};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: ${({ width }) => width};
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
