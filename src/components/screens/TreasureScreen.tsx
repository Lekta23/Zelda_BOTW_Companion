import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTreasure } from '../hooks/useTreasure';
import CardTreasure from '../treasure/CardTreasure';

type Props = {};

const TreasureScreen = (props: Props) => {
  const { isLoading, isError, data } = useTreasure();

  if (isLoading) {
    return <Text>Loading…</Text>;
  }
  if (isError) {
    return <Text>Something bad happened…</Text>;
  }

  const renderItemEquipent = (props: any) => <CardTreasure {...props} />;
  return (
    <>
    {data && (
      <FlatList
        data={data.data}
        renderItem={renderItemEquipent}
        keyExtractor={(item) => item.id}
      />
    )}
  </>
  );
};

export default TreasureScreen;

const styles = StyleSheet.create({});
