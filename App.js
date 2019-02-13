import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Screen from "./src/components/screen";
import TabNavigator from "./src/navigators";
import reducers from "./src/reducers";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <TabNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  welcome: {},
  instructions: {}
});
