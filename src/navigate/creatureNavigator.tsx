
import { AppRoutes } from "./AppRoute";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreaturesScreen from "../screens/CreaturesScreen";


export const creatureNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator
      >
        <Stack.Screen
          name={AppRoutes.CREATURES_SCREEN}
          component={CreaturesScreen}
        />
      </Stack.Navigator>
    );
  };