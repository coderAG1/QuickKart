import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function HeaderTabs() {
  const [activeTab, setactiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btncolor="black"
        textcolor="white"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
      />
      {/* <HeaderButton
        text="Pickup"
        btncolor="white"
        textcolor="black"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
      /> */}
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab == props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 15,
      borderRadius: 30,
    }}
    onPress={() => props.setactiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab == props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
