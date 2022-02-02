import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Card, Paragraph, Title } from "react-native-paper";

type MonstersProps = {
  id: string;
  common_locations?: Array<String>;
  description: string;
  image: string;
  name: string;
  drop: Array<String>;
};

const CardMonsters = ({ item }: any) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Title titleStyle={styles.text} title={item.name} />
      <Card.Content>
        <Paragraph>{item.description}</Paragraph>
        {item.common_locations?.map((locations: any) => {
          <Text>{locations}</Text>;
        })}
        {item.drop?.map((dropable: any) => {
          <Text>{dropable}</Text>;
        })}
      </Card.Content>
      <Button>Detail</Button>
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
