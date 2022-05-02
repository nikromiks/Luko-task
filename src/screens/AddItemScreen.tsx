import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

import Button from "../components/Button";
import { CurrencyInput } from "../components/CurrencyInput";
import { Input } from "../components/Input";
import { MultilineInput } from "../components/MultilineInput";
import { Photo } from "../components/Photo";
import { RootStackParamList, RootTabScreenProps } from "../navigation/types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { add, save } from "../store/inventorySlice";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "AddItem">;

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const dispatch = useAppDispatch();
  const { params } = useRoute<ProfileScreenRouteProp>();
  const item = useAppSelector((state) =>
    state.inventory.data.find((item) => item.id === params?.itemId)
  );

  const [image, setImage] = useState<string | undefined>(item?.photo);
  const [name, setName] = useState(item?.name ?? "");
  const [amount, setAmount] = useState(String(item?.purchasePrice || ""));
  const [description, setDescription] = useState(item?.description || "");

  const isAddDisabled = !image || !name || !amount;

  const onChangeImage = (newImage: string) => {
    setImage(newImage);
  };
  const onDeleteImage = () => {
    setImage(undefined);
  };
  const onChangeAmount = (newAmount: string) => {
    setAmount(newAmount);
  };
  const handleSave = () => {
    if (image) {
      if (item) {
        dispatch(
          save({
            ...item,
            name,
            photo: image,
            purchasePrice: Number.parseInt(amount),
            description,
          })
        );
      } else {
        dispatch(
          add({
            name,
            photo: image,
            purchasePrice: Number.parseInt(amount),
            description,
          })
        );
      }

      navigation.goBack();
    }
  };

  // TODO: catch focus change
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button
          title={item ? "Save" : "Add"}
          disabled={isAddDisabled}
          onPress={handleSave}
        />
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
        value={name}
        onChangeText={setName}
        placeholder="Name"
        maxLength={160}
      />
      <CurrencyInput
        style={styles.input}
        title="Value"
        value={amount}
        onChangeText={onChangeAmount}
        placeholder="Max 40,000"
        currency="€"
      />
      <MultilineInput
        style={styles.input}
        title="Description"
        value={description}
        onChangeText={setDescription}
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
