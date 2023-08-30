import { CSSProperties, InputHTMLAttributes } from "react";

export interface StyledInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  width?: CSSProperties["width"];
  label?: string;
  errorMessage?: string;
  message?: string;
  textAlign?: CSSProperties["textAlign"];
  isError?: boolean;
}

export type InputOption = "DEFAULT" | "NUMBER" | "PREVIEW" | "SEARCH";
