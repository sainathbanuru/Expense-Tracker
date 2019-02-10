import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { BACKGROUND_COLOR, PRIMARY_COLOR } from "../constants/colors";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    const { headerStyle, titleStyle } = styles;
    return (
      <View style={headerStyle}>
        <Text style={titleStyle}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BACKGROUND_COLOR
  },

  titleStyle: {
    color: PRIMARY_COLOR,
    fontFamily: "MavenPro-Bold",
    fontSize: 24
  }
});
