import * as ExpoImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export type ImageInfo = {
  uri: string;
  width: number;
  height: number;
  type?: "image" | "video";
  base64?: string;
};

export type ImagePickerResult =
  | {
      cancelled: true;
    }
  | ({
      cancelled: false;
    } & ImageInfo)
  | undefined;

const takePhoto: () => Promise<ImagePickerResult> = async () => {
  const { granted } = await ExpoImagePicker.requestCameraPermissionsAsync();
  // not supported on iOS simulator, you can use MediaLibrary with pickImage method instead
  if (granted) {
    const pickerResult = await ExpoImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    return pickerResult;
  }
  return undefined;
};

const pickImage: () => Promise<ImagePickerResult> = async () => {
  const { granted } =
    await ExpoImagePicker.requestMediaLibraryPermissionsAsync();
  if (granted) {
    const pickerResult = await ExpoImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    return pickerResult;
  }
  return undefined;
};

const photoPickerAlert = async (): Promise<ImagePickerResult> => {
  return new Promise((resolve, reject) => {
    Alert.alert("Choose an option", "", [
      {
        text: "Choose from gallery",
        onPress: () => {
          pickImage().then(resolve, reject);
        },
      },
      {
        text: "Take a picture",
        onPress: () => {
          takePhoto().then(resolve, reject);
        },
      },
      {
        text: "Cancel",
        onPress: () => reject(),
        style: "cancel",
      },
    ]);
  });
};

export const ImagePicker = {
  takePhoto,
  pickImage,
  photoPickerAlert,
};
