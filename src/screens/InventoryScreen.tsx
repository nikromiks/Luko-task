import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { InventoryItem } from "../components/InventoryItem";
import { Title } from "../components/Title";
import { RootTabScreenProps } from "../navigation/types";
import { IInventoryItem } from "../network/types";
import { useAppSelector } from "../store/hooks";
import { colors } from "../theme/colors";

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  const data = useAppSelector((state) => state.inventory.data)

  const handleAddButtonPress = () => navigation.navigate("AddItem");
  const renderHeader = () => (
    <View style={styles.header}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
    </View>
  );
  const renderItemWrapper = (props: ListRenderItemInfo<IInventoryItem>) => (
    <View style={styles.item}>
      <InventoryItem {...props}/>
    </View>
  )
    
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => "" + item.id}
        numColumns={2}
        renderItem={renderItemWrapper}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  row: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  item: {
    flex: 0.5,
    marginHorizontal: 10,
    maxWidth: '45%' // tweak width of last item
  }
});
