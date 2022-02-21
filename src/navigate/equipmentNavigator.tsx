import CardEquipmentDetail from "../components/equipment/CardEquipmentDetail";
import EquipmentScreen from "../screens/EquipmentScreen";
import { AppRoutes } from "./AppRoute";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export const equipmentNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator
      >
        <Stack.Screen
          name={AppRoutes.EQUIPMENT_SCREEN}
          component={EquipmentScreen}
        />
        <Stack.Screen
          name={AppRoutes.EQUIPMENTDETAIL_SCREEN}
          component={CardEquipmentDetail}
        />
      </Stack.Navigator>
    );
  };