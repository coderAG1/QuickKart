import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/PlacesDetails/About";
import MenuImage from "../components/PlacesDetails/MenuImage";
import OrderBox from "../components/PlacesDetails/OrderBox";

export default function PlacesDetail({ route, navigation, setModalVisible }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ margin: 3 }} />
      <MenuImage navigation={navigation} />
      <OrderBox navigation={navigation} setModalVisible={setModalVisible} />
    </View>
  );
}
