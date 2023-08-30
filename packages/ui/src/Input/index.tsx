import DefaultInput from "./DefaultInput";
import { InputOption, StyledInputProps } from "./Input.type";
import NumberInput from "./NumberInput";
import PreviewInput from "./PreviewInput";
import SearchInput from "./SearchInput";

interface InputProps extends StyledInputProps {
  option: InputOption;
}

export const Input = ({
  isError = false,
  option = "DEFAULT",
  ...props
}: InputProps) => {
  const inputProps = { isError, option, ...props };

  switch (option) {
    case "DEFAULT":
      return <DefaultInput {...inputProps} />;
    case "NUMBER":
      return <NumberInput {...inputProps} />;
    case "PREVIEW":
      return <PreviewInput {...inputProps} />;
    case "SEARCH":
      return <SearchInput {...inputProps} />;
    default:
      return <DefaultInput {...inputProps} />;
  }
};
