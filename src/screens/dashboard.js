import React, { Component } from "react";
import { Text, View } from "react-native";
import { PRIMARY_COLOR } from "../constants/colors";
import MonthCard from "../components/monthCard";
import Screen from "../components/screen";
import Header from "../components/header";

export default class Dashboard extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Dashboard" />

        <Screen>
          <MonthCard />
          <MonthCard />
          <MonthCard />
          <MonthCard />
          <MonthCard />
          <MonthCard />
          <MonthCard />
          <MonthCard />
        </Screen>
      </View>
    );
  }
}
