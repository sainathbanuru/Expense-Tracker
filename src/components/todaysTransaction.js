import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class TodaysTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      container,
      dateContainer,
      dateStyle,
      monthStyle,
      descriptionStyle,
      reasonText,
      amountContainer
    } = styles;

    const {
      backgroundColor,
      dateColor,
      positive,
      description,
      reason,
      price
    } = this.props;

    return (
      <View style={container}>
        <View style={[dateContainer, { backgroundColor }]}>
          <Text style={[dateStyle, { color: dateColor }]}>28</Text>
          <Text style={[monthStyle, { color: dateColor }]}>Jan</Text>
        </View>
        <View style={{ flex: 1, marginLeft: 16 }}>
          <Text style={reasonText}> {reason} </Text>
        </View>
        <View style={amountContainer}>
          <Icon
            name={positive ? "plus" : "minus"}
            color={positive ? "green" : "red"}
            size={8}
          />
          <Text
            style={{
              color: positive ? "green" : "red",
              fontSize: 16,
              marginLeft: 8
            }}
          >
            <Icon name={"rupee"} size={16} />
            {price}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 8
  },

  dateContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8
  },

  dateStyle: {
    fontSize: 24,
    fontFamily: "MavenPro-Bold"
  },

  monthStyle: {
    fontSize: 16,
    fontFamily: "MavenPro-Regular"
  },

  descriptionStyle: {
    fontSize: 14,
    fontFamily: "MavenPro-Regular",
    alignSelf: "flex-start"
  },

  reasonText: {
    fontSize: 20,
    fontFamily: "MavenPro-Medium"
  },

  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16
  }
});
