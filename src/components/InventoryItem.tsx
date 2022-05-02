import { useNavigation } from "@react-navigation/native";
import {
  ListRenderItem,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { IInventoryItem } from "../network/types";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";
import { currencyFormat } from "../utils";

export const InventoryItem: ListRenderItem<IInventoryItem> = (props) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.container,
      ]}
      onPress={() => {
        navigation.navigate("AddItem", {
          itemId: props.item.id,
        });
      }}
      pressRetentionOffset={10}
    >
      <Image style={styles.image} source={{ uri: props.item.photo }} />
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {props.item.name}
        </Text>
        <Text style={styles.currencyTitle}>
          {currencyFormat(props.item.purchasePrice)}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  image: {
    height: 150,
  },
  titleContainer: {
    padding: 20,
  },
  title: {
    fontFamily: fonts.bold,
    minHeight: 56,
    fontSize: 25,
  },
  currencyTitle: {
    fontFamily: fonts.regular,
    fontSize: 22,
  },
});
