import React from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, Image } from "react-native";

export default function About() {
  const route = useRoute();
  const { name, image, rating, review } = route.params;

  const description = `${rating}⭐(${review}+)`;

  return (
    <View>
      <PlaceImage image={image} />
      <PlaceTitle name={name} />
      <PlaceDescription description={description} />
    </View>
  );
}

const PlaceImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);
const PlaceTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: 600,
      marginTop: 5,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);
const PlaceDescription = (props) => (
  <Text
    style={{
      marginTop: 5,
      fontSize: 15.5,
      fontWeight: "400",
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
);
