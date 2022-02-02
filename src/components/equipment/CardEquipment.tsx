import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Card, Paragraph } from "react-native-paper";
import { AppRoutes } from "../navigate/AppRoute";

type Props = {
  name: string;
  image: string;
  description: string;
};

const CardEquipment = ({ item }: any) => {
  const navigation = useNavigation();
  return (
    <Card
      style={styles.card}
      onPress={() =>
        navigation.navigate(AppRoutes.EQUIPMENTDETAIL_SCREEN, { item })
      }
    >
      <Card.Cover source={{ uri: item.image }} />
      <Card.Title titleStyle={styles.text} title={item.name} />
      <Card.Content>
        <Paragraph>{item.description}</Paragraph>
        <Paragraph>
          Attack : {item.attack} - Defense : {item.defense}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: 200,
    margin: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
  },
  buy: {
    fontSize: 18,
    fontWeight: "bold",
  },

  text: {
    textTransform: "uppercase",
  },
});

export default CardEquipment;
