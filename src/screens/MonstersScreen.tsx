import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useMonsters } from "../hooks/UseMonsters";
import CardMonsters from "../components/monsters/CardMonsters";

type Props = {};

const MonstersScreen = (props: Props) => {
  const { isLoading, isError, data } = useMonsters();

  if (isLoading) {
    return <Text>Loading…</Text>;
  }
  if (isError) {
    return <Text>Something bad happened…</Text>;
  }

  const renderItem = (props: any) => <CardMonsters {...props} />;

  return (
    <>
      {data && (
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
};

export default MonstersScreen;
