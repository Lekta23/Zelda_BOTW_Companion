import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AppRoutes } from "./AppRoute";
import { Colors } from "react-native-paper";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { monsterNavigator } from "./monsterNavigator";
import { equipmentNavigator } from "./equipmentNavigator";
import { creatureNavigator } from "./creatureNavigator";
import { treasureNavigator } from "./treasureNavigator";
import { materialNavigator } from "./materialNavigator";

type Props = {};

const Tab = createMaterialBottomTabNavigator();

const BottomNavigationBar = (props: Props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor={Colors.purple500}
        inactiveColor={Colors.grey300}
        barStyle={{ backgroundColor: Colors.white }}
      >
        <Tab.Screen
          name={AppRoutes.MONSTERS_STACK}
          component={monsterNavigator}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="optin-monster" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name={AppRoutes.EQUIPMENT_STACK}
          component={equipmentNavigator}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="sword" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name={AppRoutes.CREATURES_SCREEN}
          component={creatureNavigator}
          options={{
            tabBarIcon: () => <Entypo name="baidu" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name={AppRoutes.MATERIAL_SCREEN}
          component={materialNavigator}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="diamond-stone"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name={AppRoutes.TEASURE_SCREEN}
          component={treasureNavigator}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="treasure-chest"
                size={24}
                color="black"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigationBar;
