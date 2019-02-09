import React, { Component } from "react";
import { Text, View } from "react-native";
import Screen from "../components/screen";
import GradientCard from "../components/gradientCard";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../constants/colors";

export default class ThisMonth extends Component {
  render() {
    return (
      <Screen>
        <GradientCard
          style={{ height: 160, borderRadius: 8 }}
          colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={{
                flex: 1,
                fontSize: 32,
                color: "#fff",
                fontFamily: "MavenPro-Medium",
                marginLeft: 16,
                justifyContent: "center",
                alignSelf: "center"
              }}
            >
              1000
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 28,
                  color: "#fff",
                  fontFamily: "MavenPro-Medium"
                }}
              >
                1000
              </Text>
              <Text
                style={{
                  fontSize: 28,
                  color: "#fff",
                  fontFamily: "MavenPro-Medium"
                }}
              >
                1000
              </Text>
            </View>
          </View>
        </GradientCard>
      </Screen>
    );
  }
}
