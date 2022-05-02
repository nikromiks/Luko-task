import React from "react";
import {
  StyleSheet,
  Text,
  TextInputProps,
} from "react-native";
import { fonts } from "../theme/fonts";
import { Input } from "./Input";

export const CurrencyInput = ({
  currency,
  ...props
}: TextInputProps & {
  title?: string;
  currency?: string;
}) => {
  return (
    <Input {...props} maxLength={5}> 
     {currency ? <Text style={styles.currencyTitle}>{currency}</Text> : null}
    </Input>
  );
};

const styles = StyleSheet.create({
  currencyTitle: {
    position: "absolute",
    right: 10,
    fontFamily: fonts.regular,
    fontSize: 20,
  },
});
