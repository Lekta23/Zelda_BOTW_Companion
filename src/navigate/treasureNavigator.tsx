import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MonstersScreen from "../screens/MonstersScreen";
import { AppRoutes } from "./AppRoute";
import TreasureScreen from "../screens/TreasureScreen";



export const treasureNavigator = () => {
const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={AppRoutes.TEASURE_SCREEN}
          component={TreasureScreen}
        />
      </Stack.Navigator>
    );
  };