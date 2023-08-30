import styled from "@emotion/styled";
import { color } from "@maru/design-token";
import { IconSearch } from "../assets";
import { StyledInputProps } from "./Input.type";

const SearchInput = ({
  width = 320,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: StyledInputProps) => {
  return (
    <StyledSearchInput>
      <IconSearch
        color={color.gray400}
        width={24}
        height={24}
        cursor="pointer"
      />
      <Input
        style={{ width }}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
      />
    </StyledSearchInput>
  );
};

export default SearchInput;

const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 40px;
  padding: 10px 8px;
  background-color: ${color.white};
  border: 1px solid ${color.gray400};
  border-radius: 6px;

  &:focus-within {
    border: 1px solid ${color.maruDefault};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }
`;

const Input = styled.input`
  color: ${color.gray800};
  width: 100%;
  height: 100%;

  &::placeholder {
    color: ${color.gray500};
  }
`;