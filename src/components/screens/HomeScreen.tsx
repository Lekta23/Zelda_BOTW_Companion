import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { AppRoutes } from '../navigate/AppRoute';

type Props = {};

const HomeScreen = (props : any) => {
  return (
    <>
    <Text style={styles.text}>Zelda Breath Of The Wild</Text>
    <Button style={styles.button} icon="cordova" color='black' mode="contained" onPress={() => {props.navigation.navigate(AppRoutes.MONSTERS_SCREEN)}}>
            Monsters
          </Button>
          <Button style={styles.button} icon="sword" color='black' mode="contained" onPress={() => {props.navigation.navigate(AppRoutes.EQUIPMENT_SCREEN)}}>
            Equipment
          </Button>
          <Button style={styles.button} icon="diamond-stone" color='black' mode="contained" onPress={() => {props.navigation.navigate(AppRoutes.MATERIAL_SCREEN)}}>
            Material
          </Button>
          <Button style={styles.button} icon="treasure-chest" color='black' mode="contained" onPress={() => {props.navigation.navigate(AppRoutes.TEASURE_SCREEN)}}>
            Teasure
          </Button>
          <Button style={styles.button} icon="horseshoe" color='black' mode="contained" onPress={() => {props.navigation.navigate(AppRoutes.CREATURES_SCREEN)}}>
            Creatures
          </Button>
    </>
  );
};

const styles = StyleSheet.create({

  button: {
    backgroundColor : "black",
    color: "white",
    borderColor: "#8C867C",
    borderStyle : "solid",
    borderWidth : 3,
    padding: 4,
    margin: 10,

  },

  text: {
    fontSize: 20,
    textAlign: "center",
  }
})

export default HomeScreen;
