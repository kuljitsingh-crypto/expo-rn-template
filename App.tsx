import React from "react";
import AppNavigator from "./AppNavigator";
import { createStore } from "./store";
import { Provider } from "react-redux";
import { SimpleToastProvider } from "./src/SimpleToast";
import { SafeAreaView } from "react-native";
import { colors } from "./src/utill";
import { useDeepLink } from "./src/deepLink";
import "./src/utill/i18n/i18n.config";

const DeepLinkWrapper = ({ children }: { children: React.JSX.Element }) => {
  useDeepLink();
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
};

const App = () => {
  const store = createStore();
  const { dispatch } = store;
  return (
    <Provider store={store}>
      <DeepLinkWrapper>
        <SimpleToastProvider
          infoColor={colors.infoToast}
          successColor={colors.successToast}
          errorColor={colors.errorToast}>
          <AppNavigator dispatch={dispatch} />
        </SimpleToastProvider>
      </DeepLinkWrapper>
    </Provider>
  );
};

export default App;
