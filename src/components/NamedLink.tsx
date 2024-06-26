import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { normalFont } from "../styles/appDefaultStyle";
import { colors } from "../utill";
import { ScreenParamList, ScreenValue } from "../screens/screenNames";
import { useScreenNavigation } from "../hooks";
import { InlineTextButton } from "./Button";

type RouteName = keyof ScreenParamList;

type RouteProps<Tname extends RouteName> =
  undefined extends ScreenParamList[Tname]
    ? { name: Tname; params?: ScreenParamList[Tname] }
    : { name: Tname; params: ScreenParamList[Tname] };

type OtherProps = {
  replace?: boolean;
  linkStyle?: Record<string, unknown>;
  textStyle?: Record<string, unknown>;
  children: string | React.JSX.Element;
};

type NamedLinkProps<Tname extends RouteName> = OtherProps & RouteProps<Tname>;
const NamedLink = <Tname extends RouteName>(props: NamedLinkProps<Tname>) => {
  const navigation = useScreenNavigation();
  const {
    linkStyle: propsLinkStyle,
    textStyle: propsTextStyle,
    replace,
    children,
    name,
    params,
  } = props;

  const textStyle = {
    ...styles.textStyle,
    ...(!!propsTextStyle ? propsTextStyle : {}),
  };

  const linkStyle = {
    ...styles.linkStyle,
    ...(!!propsLinkStyle ? propsLinkStyle : {}),
  };

  const buttonChild =
    typeof children === "string" ? (
      <Text style={textStyle}>{children}</Text>
    ) : (
      children
    );

  const onPress = () => {
    if (replace) {
      navigation.replace(name, params as ScreenParamList[Tname]);
    } else {
      navigation.push(name, params as ScreenParamList[Tname]);
    }
  };
  return (
    <InlineTextButton onPress={onPress} style={linkStyle}>
      {buttonChild}
    </InlineTextButton>
  );
};

export default NamedLink;

const styles = StyleSheet.create({
  textStyle: {
    ...normalFont,
    color: colors.linkText,
    textDecorationLine: "underline",
  },
  linkStyle: {
    backgroundColor: colors.white,
    padding: 4,
    paddingVertical: 6,
    margin: 8,
    flexShrink: 1,
  },
});
