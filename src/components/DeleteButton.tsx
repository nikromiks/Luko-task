import { StyleSheet, Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

export default function DeleteButton(props: PressableProps) {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        props.style as StyleProp<ViewStyle>,
        styles.button,
        { opacity: pressed ? 0.5 : 1 },
      ]}
      pressRetentionOffset={10}
    >
      <MaterialCommunityIcons name="delete" size={28} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
});
