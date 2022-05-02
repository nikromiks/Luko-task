import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

export const Input = ({
  style,
  styleInput,
  children,
  ...props
}: TextInputProps & {
  title?: string;
  styleInput?: TextInputProps["style"];
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.inputRow}>
        <TextInput
          editable
          {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
          style={[
            styles.input,
            styleInput,
          ]}
        />
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: 20,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.mainGrey,
    padding: 5,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
