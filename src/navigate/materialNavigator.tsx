
import { AppRoutes } from "./AppRoute";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreaturesScreen from "../screens/CreaturesScreen";
import MaterialScreen from "../screens/MaterialScreen";


export const materialNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator
      >
        <Stack.Screen
          name={AppRoutes.MATERIAL_SCREEN}
          component={MaterialScreen}
        />
      </Stack.Navigator>
    );
  };