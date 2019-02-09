import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import {
  TAB_NAVIGATOR,
  CURRENT_MONTH,
  DASHBOARD,
  PROFILE
} from "../constants/screens";
import CurrentMonth from "../screens/thisMonth";
import Dashboard from "../screens/dashboard";
import Profile from "../screens/profile";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  DISABLED_COLOR
} from "../constants/colors";

const MainTabNavigator = createBottomTabNavigator(
  {
    [CURRENT_MONTH.ROUTE]: {
      screen: CurrentMonth,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <IconAntDesign name={"creditcard"} size={24} color={tintColor} />
        )
      }
    },

    [DASHBOARD.ROUTE]: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name={"show-chart"} size={24} color={tintColor} />
        )
      }
    },

    [PROFILE.ROUTE]: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name={"user-o"} size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: SECONDARY_COLOR,
      inactiveTintColor: DISABLED_COLOR,
      showLabel: false
    }
  }
);

export default createAppContainer(MainTabNavigator);
