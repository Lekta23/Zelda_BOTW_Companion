import { View, Text } from "react-native";
import React from "react";

type Props = {
 route : any,
 navigation: any
};

const CardMonstersDetail = ({route, navigation}: Props) => {
    const { id,
        common_locations,
        description,
        image,
        name,
        drop,} = route.params.item;
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default CardMonstersDetail;
