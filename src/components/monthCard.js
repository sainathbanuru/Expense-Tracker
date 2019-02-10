import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { PRIMARY_COLOR, DISABLED_COLOR } from "../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import Title from "../components/title";

export default class MonthCard extends Component {
  render() {
    const {
      container,
      summary,
      amountTextStyle,
      amountTypeStyle,
      monthDetailsContainer,
      monthDetailsText
    } = styles;

    return (
      <View>
        <Title name="Feb 2019" />
        <View style={container}>
          <View style={summary}>
            <View style={{ alignItems: "center" }}>
              <Text style={amountTextStyle}>
                <Icon name={"rupee"} />
                1000
              </Text>
              <Text style={amountTypeStyle}>Income</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={amountTextStyle}>
                <Icon name={"rupee"} />
                1000
              </Text>
              <Text style={amountTypeStyle}>Expenses</Text>
            </View>
          </View>
          <View style={monthDetailsContainer}>
            <Text style={monthDetailsText}>savings: </Text>
            <Text style={monthDetailsText}>
              <Icon name={"rupee"} />
              {"2000"}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.2,
    borderColor: DISABLED_COLOR,
    marginBottom: 20
  },

  summary: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8
  },

  amountTextStyle: {
    fontSize: 24,
    fontFamily: "MavenPro-Medium",
    color: PRIMARY_COLOR
  },

  amountTypeStyle: {
    fontSize: 16,
    fontFamily: "MavenPro-Regular",
    color: PRIMARY_COLOR
  },

  monthDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: DISABLED_COLOR,
    borderTopWidth: 0.5,
    padding: 8
  },
  monthDetailsText: {
    color: PRIMARY_COLOR,
    fontSize: 20,
    fontFamily: "MavenPro-Regular"
  }
});
