import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./src/utill/i18n/i18n.config";
import { useFontLoader, useIntl } from "./src/hooks";
import { FormatedMessage, Icon } from "./src/components";
import { normalFont } from "./src/styles/appDefaultStyle";
import { parse } from "./src/utill";

export default function App() {
  const intl = useIntl();

  // // use this only when using Expo Go
  // const { fontLoaded } = useFontLoader();
  // if (!fontLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={normalFont}>
        {intl.formatMessage("Home.greeting", { name: "kuljit" })}
      </Text>
      <FormatedMessage
        id='Home.greeting'
        values={{ name: "singh" }}
        style={normalFont}
      />
      <Icon iconType='ant' name='stepforward' size={24} color='black' />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
