import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

type Props = {
  route: any;
  navigation: any;
};

const CardMonstersDetail = ({ route, navigation }: Props) => {
  
  const { id, common_locations, description, image, name, drops } =
    route.params.item;

    console.log(route.params.item);
    

  return (
    <View>
      <Image style={styles.img} source={{ uri: image }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>Location :{common_locations}</Text>

      <Text style={styles.text}>Drop :{drops}</Text>
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

export default CardMonstersDetail;
