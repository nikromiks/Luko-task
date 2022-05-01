import { ListRenderItem, StyleSheet, Text, View, Image } from "react-native";
import { IInventoryItem } from "../network/types";
import { fonts } from "../theme/fonts";
import { currencyFormat } from "../utils";
import AddButton from "./AddButton";

export const InventoryItem: ListRenderItem<IInventoryItem> = (props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.item.photo }} style={styles.image} />
      <Text style={styles.title}>{props.item.name}</Text>
      <Text style={styles.title}>
        {currencyFormat(props.item.purchasePrice)}
      </Text>
      {/* {props.onButtonPress? <AddButton onPress={props.onButtonPress} /> : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    borderRadius: 25,
    overflow: 'hidden',
  },
  image: {
    height: 200,
    // width: 305,
    // height: 159,
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: 34,
    lineHeight: 42,
  },
  titleContainer: {
    width: "100%",
    height: 42,
    marginTop: 99,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
