import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

import Button from "../components/Button";
import { CurrencyInput } from "../components/CurrencyInput";
import { Input } from "../components/Input";
import { MultilineInput } from "../components/MultilineInput";
import { Photo } from "../components/Photo";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const [image, setImage] = useState<string>();

  const onChangeImage = (newImage: string) => {
    setImage(newImage);
  };
  const onDeleteImage = () => {
    setImage(undefined);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled onPress={() => undefined} />
      </View>
      <Photo
        style={styles.photo}
        image={image}
        onImageChanged={onChangeImage}
        onDeleteImage={onDeleteImage}
      />
      <Input
        style={styles.input}
        title="Name"
        value=""
        placeholder="Name"
        maxLength={160}
      />
      <CurrencyInput
        style={styles.input}
        title="Value"
        value=""
        placeholder="Max 40,000"
        currency="€"
      />
      <MultilineInput
        style={styles.input}
        title="Description"
        value=""
        placeholder="Optional"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  photo: {
    alignSelf: "center",
    marginTop: 24,
  },
  input: {
    marginVertical: 10,
  },
  currencyTitle: {
    fontFamily: fonts.regular,
    fontSize: 20,
  },
});
