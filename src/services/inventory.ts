import { Alert } from "react-native";
import { currencyFormat } from "../utils";

const MAX_TOTAL = 40000;

export function validateTotalSum(data: { purchasePrice: number }[]) {
  const sum = data.reduce((acc, item) => acc + item.purchasePrice, 0);

  return MAX_TOTAL - sum;
}

export const showTotalLimitAlert = async (maxValue: number) => {
  return new Promise((resolve, reject) => {
    Alert.alert("There is a limit for Value", `${currencyFormat(maxValue)}`, [
      {
        text: "OK",
        onPress: () => reject(),
      },
    ]);
  });
};
