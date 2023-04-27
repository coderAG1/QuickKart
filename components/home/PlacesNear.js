import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const PlacesToOrder = [
  {
    name: "Froyo",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQej-baqb4CuyyRHJGfZ6Y_OMkLH_H1vV6ppQ&usqp=CAU",
    categories: ["Froyo", "Canteen"],
    price: "$$",
    review: 100,
    rating: "3.9",
  },
  {
    name: "Brunch Cafe",
    image_url:
      "https://img.restaurantguru.com/r1a8-Brunch-cafe-design-2021-09-9.jpg",
    categories: ["Brunch", "Cafe"],
    price: "$$",
    review: 500,
    rating: "4.1",
  },
  {
    name: "Baskin Robin",
    image_url:
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/6/y/a/p60-1493963153590c1191ea997.jpg?tr=tr:n-large",
    categories: ["Froyo", "Canteen"],
    price: "$$",
    review: 800,
    rating: "4.5",
  },
  {
    name: "Smit Store",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8WQWPYLdAP7pPfu0onVw1OnlmWYhabwFMQ&usqp=CAU",
    categories: ["Froyo", "Canteen"],
    price: "$$",
    review: 1000,
    rating: "4.7",
  },
];
export default function PlacesNear({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((Restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("PlacesDetail", {
              name: Restaurant.name,
              image: Restaurant.image_url,
              categories: Restaurant.categories,
              price: Restaurant.price,
              review: Restaurant.review,
              rating: Restaurant.rating,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={Restaurant.image_url} />
            <RestaurantInfo name={Restaurant.name} rating={Restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 15, color: "grey" }}>20-30-min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
