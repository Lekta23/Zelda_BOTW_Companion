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
import CardMonstersDetail from "../components/monsters/CardMonstersDetail";
import CardEquipment from "../components/equipment/CardEquipment";
import CardEquipmentDetail from "../components/equipment/CardEquipmentDetail";
import { BottomNavigation } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";



type Props = {};

const Navigators = (props: Props) => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Monsters', title: 'Monsters', icon: 'queue-music' },
    { key: 'Creatures', title: 'Creatures', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Monsters: MonstersScreen ,
    Creatures: CreaturesScreen,
  });
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  const MonsterNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: "modal",
        }}
      >
        <Stack.Screen
          name={AppRoutes.MONSTERS_SCREEN}
          component={MonstersScreen}
          // component={StarshipFeedExampleScreen}
        />
        <Stack.Screen
          name={AppRoutes.MONSTERSDETAIL_SCREEN}
          component={CardMonstersDetail}
        />
      </Stack.Navigator>
    );
  };


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
                    <Stack.Screen
            name={AppRoutes.MONSTERSDETAIL_SCREEN}
            component={CardMonstersDetail}
          />
                              <Stack.Screen
            name={AppRoutes.EQUIPMENTDETAIL_SCREEN}
            component={CardEquipmentDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigators;

const styles = StyleSheet.create({});
