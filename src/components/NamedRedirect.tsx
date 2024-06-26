import React, { useEffect } from "react";
import { ScreenParamList, ScreenValue } from "../screens/screenNames";
import { useScreenNavigation } from "../hooks";

type RouteName = ScreenValue;

type NamedLinkProps = {
  name: RouteName;
  params?: ScreenParamList[RouteName];
  replace?: boolean;
};
const NamedRedirect = (props: NamedLinkProps) => {
  const navigation = useScreenNavigation();
  const { replace, name, params } = props;
  const onNavigate = () => {
    if (replace) {
      navigation.replace(name, params);
    } else {
      navigation.push(name, params);
    }
  };
  useEffect(() => {
    onNavigate();
  }, []);
  return null;
};

export default NamedRedirect;
