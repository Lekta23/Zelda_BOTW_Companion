import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Card, Paragraph } from 'react-native-paper';

type Props = {};

const CardTreasure = ({item}: any) => {
    return (
        <Card style={styles.card}>
          <Card.Cover source={{ uri: item.image }} />
          <Card.Title titleStyle={styles.text} title={item.name} />
          <Card.Content>
            <Paragraph>{item.description}</Paragraph>
          </Card.Content>
          {/* <Button
            onPress={() =>
              navigation.navigate(AppRoutes.MONSTERSDETAIL_SCREEN, { item })
            }
          >
            Detail
          </Button> */}
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
export default CardTreasure;
