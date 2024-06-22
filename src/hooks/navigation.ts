import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenParamList, ScreenValue } from "../screens/screenNames";

type NavigationType = NativeStackScreenProps<ScreenParamList>["navigation"];
export function useScreenNavigation() {
  const navigation = useNavigation<NavigationType>();
  return navigation;
}

export type ScreenNavigation<TName extends ScreenValue> =
  NativeStackScreenProps<ScreenParamList, TName>;
