import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import { AppRoutes } from "../../navigate/AppRoute";
import { useNavigation } from "@react-navigation/native";

type MonstersProps = {
  id: string;
  common_locations?: Array<String>;
  description: string;
  image: string;
  name: string;
  drop: Array<String>;
};

const CardMonsters = ({ item }: any) => {
  const navigation = useNavigation();
  return (
    <Card
      style={styles.card}
      onPress={() =>
        navigation.navigate(AppRoutes.MONSTERSDETAIL_SCREEN, { item })
      }
    >
      <Card.Cover source={{ uri: item.image }} />
      <Card.Title titleStyle={styles.text} title={item.name} />
      <Card.Content>
        <Paragraph>{item.description}</Paragraph>
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

export default CardMonsters;
