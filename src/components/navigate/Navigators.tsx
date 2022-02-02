import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./AppRoute";
import HomeScreen from "../screens/HomeScreen";
import CreaturesScreen from "../screens/CreaturesScreen";
import EquipmentScreen from "../screens/EquipmentScreen";
import MaterialScreen from "../screens/MaterialScreen";
import TreasureScreen from "../screens/TreasureScreen";
import MonstersScreen from "../screens/MonstersScreen";

type Props = {};

const Navigators = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={AppRoutes.HOME_SCREEN}>
          <Stack.Screen name={AppRoutes.HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen
            name={AppRoutes.CREATURES_SCREEN}
            component={CreaturesScreen}
          />
          <Stack.Screen
            name={AppRoutes.EQUIPMENT_SCREEN}
            component={EquipmentScreen}
          />
          <Stack.Screen
            name={AppRoutes.MATERIAL_SCREEN}
            component={MaterialScreen}
          />
          <Stack.Screen
            name={AppRoutes.TEASURE_SCREEN}
            component={TreasureScreen}
          />
          <Stack.Screen
            name={AppRoutes.MONSTERS_SCREEN}
            component={MonstersScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigators;

const styles = StyleSheet.create({});
