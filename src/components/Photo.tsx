import {
  Pressable,
  StyleSheet,
  Image,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";
import { MaterialIcons } from "@expo/vector-icons";
import DeleteButton from "./DeleteButton";
import { ImagePicker } from "../sdk/ImagePicker";

export const Photo = (props: {
  onImageChanged?: (source?: string) => void;
  style?: StyleProp<ViewStyle>;
  image?: string;
}) => {
  const onContainerPress = async () => {
    // TODO: show modal window to choose: from gallery or from camera
    let result = await ImagePicker.photoPickerAlert();

    if (result && !result.cancelled) {
      props.onImageChanged && props.onImageChanged(result.uri);
    }
  };
  const onPressDelete = () => {
    props.onImageChanged && props.onImageChanged(undefined);
  };

  const renderImage = () => (
    <>
      <Image style={styles.image} source={{ uri: props.image }} />
      <DeleteButton style={styles.deleteButton} onPress={onPressDelete} />
    </>
  );
  const renderAdd = () => (
    <>
      <MaterialIcons name="photo-camera" size={54} color="blue" />
      <Text style={styles.add}>Add photo</Text>
    </>
  );

  return (
    <Pressable
      onPress={onContainerPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        !props.image ? styles.stroke : null,
        styles.container,
        props.style,
      ]}
      pressRetentionOffset={10}
    >
      {props.image ? renderImage : renderAdd}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 180,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  stroke: {
    borderWidth: 3,
    borderColor: colors.mainGrey,
    borderStyle: "dashed",
  },
  image: {
    borderRadius: 90,
    height: 180,
    width: 180,
  },
  deleteButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  add: {
    fontFamily: fonts.bold,
    fontSize: 24,
  },
});
