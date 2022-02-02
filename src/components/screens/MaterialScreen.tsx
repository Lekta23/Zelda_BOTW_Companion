import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardMaterials from '../materials/CardMaterials';
import { useMaterial } from '../hooks/UseMaterial';

type Props = {};

const MaterialScreen = (props: Props) => {
  const { isLoading, isError, data } = useMaterial();

  if (isLoading) {
    return <Text>Loading…</Text>;
  }
  if (isError) {
    return <Text>Something bad happened…</Text>;
  }

  const renderItemMaterial = (props: any) => <CardMaterials {...props} />;
  return (
    <>
    {data && (
      <FlatList
        data={data.data}
        renderItem={renderItemMaterial}
        keyExtractor={(item) => item.id}
      />
    )}
  </>
  );
};

export default MaterialScreen;

const styles = StyleSheet.create({});
