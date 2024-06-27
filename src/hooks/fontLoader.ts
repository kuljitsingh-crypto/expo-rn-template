import { useFonts } from "expo-font";
import { fonts } from "../constants";
export function useFontLoader() {
  const [loadded, error] = useFonts({
    [fonts.thin]: require("../../assets/fonts/Poppins-Thin.ttf"),
    [fonts.light]: require("../../assets/fonts/Poppins-Light.ttf"),
    [fonts.regluar]: require("../../assets/fonts/Poppins-Regular.ttf"),
    [fonts.medium]: require("../../assets/fonts/Poppins-Medium.ttf"),
    [fonts.semiBold]: require("../../assets/fonts/Poppins-SemiBold.ttf"),
    [fonts.bold]: require("../../assets/fonts/Poppins-Bold.ttf"),
    [fonts.extraBold]: require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    [fonts.italic]: require("../../assets/fonts/Poppins-Italic.ttf"),
  });

  return { fontLoaded: loadded, fontError: error };
}
