import React, { Component } from "react";
import { Text, View } from "react-native";
import Screen from "../components/screen";
import GradientCard from "../components/gradientCard";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TEXT_COLOR
} from "../constants/colors";
import TodaysTransaction from "../components/todaysTransaction";
import LineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontIcon from "react-native-vector-icons/FontAwesome";
import Header from "../components/header";
import Title from "../components/title";

export default class ThisMonth extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Home" />
        <Screen>
          <Title name={"Feb 2019"} bold />

          <GradientCard
            style={{ height: 160, borderRadius: 8, flexDirection: "row" }}
            colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
          >
            <View
              style={{
                flex: 1,
                padding: 16,
                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              <View>
                <LineIcons name={"wallet"} color={"white"} size={36} />
                <Text style={{ fontSize: 16, color: "#fff", marginTop: 16 }}>
                  Balance
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    margin: 0,
                    padding: 0
                  }}
                >
                  <Text
                    style={{
                      fontSize: 28,
                      color: "#fff",
                      fontFamily: "MavenPro-Medium"
                    }}
                  >
                    1000000
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: "MavenPro-Medium",
                    color: "#fff"
                  }}
                >
                  1000656487
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "MavenPro-Regular",
                    color: "#fff"
                  }}
                >
                  Income
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: "MavenPro-Medium",
                    color: "#fff"
                  }}
                >
                  1000
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "MavenPro-Regular",
                    color: "#fff"
                  }}
                >
                  Expenses
                </Text>
              </View>
            </View>
          </GradientCard>

          <Title name={"Recent Transactions"} style={{ marginVertical: 16 }} />

          <TodaysTransaction
            backgroundColor={SECONDARY_COLOR}
            dateColor={TEXT_COLOR}
            positive={false}
            reason={"shopping"}
            price={100}
          />

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
            price={100}
          />
          <TodaysTransaction
            backgroundColor={SECONDARY_COLOR}
            dateColor={TEXT_COLOR}
            positive
            reason={"shopping"}
            price={100000}
          />
          <TodaysTransaction
            backgroundColor={SECONDARY_COLOR}
            dateColor={TEXT_COLOR}
            positive={false}
            reason={"shopping"}
            price={1000}
          />
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
          <TodaysTransaction
            backgroundColor={SECONDARY_COLOR}
            dateColor={TEXT_COLOR}
            positive
            reason={"shopping"}
            price={100}
          />
        </Screen>
      </View>
    );
  }
}
