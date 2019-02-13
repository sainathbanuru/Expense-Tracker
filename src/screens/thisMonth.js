import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import LineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontIcon from "react-native-vector-icons/FontAwesome";
import Wrapper from "../components/wrapper";
import Screen from "../components/screen";
import GradientCard from "../components/gradientCard";
import TodaysTransaction from "../components/todaysTransaction";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TEXT_COLOR
} from "../constants/colors";
import Header from "../components/header";
import Title from "../components/title";
import Fonts from "../constants/fonts";

export default class ThisMonth extends Component {
  render() {
    const {
      gradientStyle,
      balanceContainer,
      balanceAmountText,
      inexContainer,
      amountText,
      amountTypeText
    } = styles;
    return (
      <Wrapper>
        <Header title="Home" />
        <Screen>
          <Title name={"Feb 2019"} bold />
          <GradientCard
            style={gradientStyle}
            colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
          >
            <View style={balanceContainer}>
              <View>
                <LineIcons name={"wallet"} color={"white"} size={36} />
                <Text style={{ fontSize: 16, color: "#fff", marginTop: 16 }}>
                  Balance
                </Text>
                <Text style={balanceAmountText}>1000000</Text>
              </View>
            </View>

            <View style={inexContainer}>
              <View style={{ alignItems: "center" }}>
                <Text style={amountText}>1000656487</Text>
                <Text style={amountTypeText}>Income</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={amountText}>1000</Text>
                <Text style={amountTypeText}>Expenses</Text>
              </View>
            </View>
          </GradientCard>
          <Title name={"Recent Transactions"} style={{ marginVertical: 16 }} />
          <TodaysTransaction
            backgroundColor={SECONDARY_COLOR}
            dateColor={TEXT_COLOR}
            positive
            reason={"shopping"}
            price={100}
          />
          <TodaysTransaction
            backgroundColor={SECONDARY_COLOR}
            dateColor={TEXT_COLOR}
            positive={false}
            reason={"shopping"}
            price={100000}
          />
        </Screen>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  gradientStyle: {
    height: 160,
    borderRadius: 8,
    flexDirection: "row"
  },

  balanceContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-end",
    alignItems: "center"
  },

  balanceAmountText: {
    fontSize: 28,
    color: "#fff",
    ...Fonts.TEXT_MEDIUM
  },
  inexContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },

  amountText: {
    fontSize: 24,
    color: "#fff",
    ...Fonts.TEXT_MEDIUM
  },

  amountTypeText: {
    fontSize: 16,
    color: "#fff",
    ...Fonts.TEXT_REGULAR
  }
});
