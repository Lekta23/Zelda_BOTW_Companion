import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardMonstersDetail from "../components/monsters/CardMonstersDetail";
import MonstersScreen from "../screens/MonstersScreen";
import { AppRoutes } from "./AppRoute";



export const monsterNavigator = () => {
const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={AppRoutes.MONSTERS_SCREEN}
          component={MonstersScreen}
        />
        <Stack.Screen
          name={AppRoutes.MONSTERSDETAIL_SCREEN}
          component={CardMonstersDetail}
        />
      </Stack.Navigator>
    );
  };