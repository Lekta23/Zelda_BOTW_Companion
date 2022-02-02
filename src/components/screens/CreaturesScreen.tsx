import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import CardCreatures from '../creatures/CardCreatures';
import {  useCreatures } from '../hooks/useCreature';
import { Button, IconButton } from 'react-native-paper';

type Props = {};

const CreaturesScreen = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true)
  let food = "";
  let type = "";
  isVisible ? food = "food" : food = "food-off"
  // isVisible ? type = "food" : type = "non-food"

  const { isLoading, isError, data } = useCreatures();

  if (isLoading) {
    return <Text>Loading…</Text>;
  }
  if (isError) {
    return <Text>Something bad happened…</Text>;
  }

  console.log(data.data.food);
  

  const renderItemCreatures= (props: any) => <CardCreatures {...props} />;
  return (
    <>
    <IconButton icon={food} onPress={() => {setIsVisible(!isVisible)}}/>
    {data && (
      <FlatList

        data={data.data.non_food}
        renderItem={renderItemCreatures}
        keyExtractor={(item) => item.id}
      />
    )}
  </>
  );
};

export default CreaturesScreen;
