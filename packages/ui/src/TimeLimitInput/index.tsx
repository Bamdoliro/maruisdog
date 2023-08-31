import { color, font } from "@maru/design-token";
import { useInterval } from "@maru/hooks";
import { flex } from "@maru/utils";
import { Dispatch, SetStateAction } from "react";
import { css, styled } from "styled-components";
import { Flex } from "../Flex";
import ConditionalMessage from "../Input/ConditionalMessage";
import { StyledInputProps } from "../Input/Input.type";
import { Text } from "../Text";

interface TimeLimitButtonProps {
  enabled: boolean;
}

export interface TimeLimitInputProps extends StyledInputProps {
  timerTime: number;
  setTimerTime: Dispatch<SetStateAction<number>>;
  buttonText: string;
  enabled: boolean;
  onClick: () => void;
}

export const TimeLimitInput = ({
  width = "320px",
  isError = false,
  enabled = false,
  label,
  message,
  onChange,
  timerTime,
  setTimerTime,
  errorMessage,
  onClick,
  buttonText,
  ...props
}: TimeLimitInputProps) => {
  const formatTime = (time: number) => {
    const minutes = ("0" + Math.floor(time / 60)).slice(-2);
    const seconds = ("0" + (time % 60)).slice(-2);

    return `${minutes}:${seconds}`;
  };

  useInterval(() => {
    setTimerTime((prev) => prev - 1);
    if (timerTime <= 0) {
      setTimerTime(0);
    }
  }, 1000);

  return (
    <div style={{ width }}>
      {label && <Label>{label}</Label>}
      <Flex gap="8px" alignItems="center" style={{ position: "relative" }}>
        <StyledTimeLimitInput isError={isError}>
          <Input onChange={onChange} type="text" {...props} />
          <Text fontType="p3" color={color.red}>
            {formatTime(timerTime)}
          </Text>
        </StyledTimeLimitInput>
        <Button onClick={onClick} enabled={enabled}>
          {buttonText}
        </Button>
      </Flex>
      <ConditionalMessage
        isError={isError}
        errorMessage={errorMessage}
        message={message}
      />
    </div>
  );
};

const StyledTimeLimitInput = styled.div<StyledInputProps>`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  gap: 10px;
  height: 48px;
  width: 100%;
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
    `};
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

export const Button = styled.button<TimeLimitButtonProps>`
  ${font.btn2};
  color: ${color.white};
  background-color: ${({ enabled }) =>
    enabled ? color.gray400 : color.maruDefault};
  pointer-events: ${({ enabled }) => enabled && "none"};
  ${flex({ alignItems: "center", justifyContent: "center" })}
  border-radius: 6px;
  height: 48px;
  padding: 10px 20px;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ enabled }) =>
      enabled ? color.gray400 : color.maruHoverd};
    cursor: ${({ enabled }) => (enabled ? "default" : "pointer")};
  }
`;

const Label = styled.p`
  ${font.context}
  color: ${color.gray700};
  margin-bottom: 8px;
`;
