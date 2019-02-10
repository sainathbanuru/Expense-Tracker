import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../constants/colors";

export default class Title extends React.Component {
  static defaultProps = {
    bold: false
  };

  render() {
    const { bold, name, style } = this.props;
    const { titleStyle } = styles;
    return (
      <Text
        style={[titleStyle, bold && { fontFamily: "MavenPro-Bold" }, style]}
      >
        {name}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontFamily: "MavenPro-Medium",
    color: PRIMARY_COLOR,
    marginVertical: 16
  }
});
