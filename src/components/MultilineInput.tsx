import React from "react";
import {
  StyleSheet,
  TextInputProps,
} from "react-native";
import { Input } from "./Input";

export const MultilineInput = ({
  style,
  styleInput,
  ...props
}: TextInputProps & {
  title?: string;
  styleInput?: TextInputProps["style"];
}) => {
  return (
    <Input
      {...props}
      multiline
      numberOfLines={5}
      textAlignVertical="top"
      styleInput={[styles.inputMultiline, styleInput]}
    />
  );
};

const styles = StyleSheet.create({
  inputMultiline: {
    height: 100,
  },
});
