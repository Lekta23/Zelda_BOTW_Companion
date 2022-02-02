import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

type Props = {
  route: any;
  navigation: any;
};

const CardEquipmentDetail = ({ route, navigation }: Props) => {
  const { attack, description, image, name, defense,common_locations } =
    route.params.item;

  return (
    <View>
      <Image style={styles.img} source={{ uri: image }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>Attack :{attack}--Defense :{defense}</Text>

      <Text style={styles.text}>Locations : {common_locations}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    minHeight: 300,
    margin: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    textTransform: "uppercase",
  },
  buy: {
    fontSize: 18,
    fontWeight: "bold",
  },

  text: {
    justifyContent: "center",
    margin: 20,
  },
});

export default CardEquipmentDetail;
