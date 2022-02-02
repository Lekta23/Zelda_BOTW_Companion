import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useEquipment } from '../hooks/UseEquipment';
import CardEquipment from '../equipment/CardEquipment';

type Props = {};

const EquipmentScreen = (props: Props) => {

  const { isLoading, isError, data } = useEquipment();

  if (isLoading) {
    return <Text>Loading…</Text>;
  }
  if (isError) {
    return <Text>Something bad happened…</Text>;
  }

  const renderItemEquipent = (props: any) => <CardEquipment {...props} />;
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

export default EquipmentScreen;
