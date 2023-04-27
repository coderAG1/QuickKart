import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const items = [
  {
    image: require("../../creating/images/shopping-bag.png"),
    text: "Order",
  },
  {
    image: require("../../creating/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../creating/images/bread.png"),
    text: "Bread",
  },
  {
    image: require("../../creating/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../creating/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../../creating/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((items, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={items.image}
              style={{
                height: 40,
                width: 50,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>
              {items.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
