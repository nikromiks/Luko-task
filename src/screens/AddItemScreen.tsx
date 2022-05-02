import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import { Photo } from "../components/Photo";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

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
    <View style={styles.container}>
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
    </View>
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
});
