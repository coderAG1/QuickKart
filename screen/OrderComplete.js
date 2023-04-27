import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import { firebase } from "../firebase";
import OrderBox from "../components/PlacesDetails/OrderBox";
import { ScrollView } from "react-native-gesture-handler";

export default function OrderComplete() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        text: "Chicken Roll",
      },
    ],
  });
  const route = useRoute();
  const { name, orderId, orderText } = route.params;

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("order")
      .orderBy("createdAt,desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, [orderId]);
  return (
    <SafeAreaView style={{ marginTop: 10, flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <Lottie
          style={{
            height: 150,
            alignSelf: "center",
            marginBottom: 5,
          }}
          source={require("../creating/animations/85185-checkmark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {name} has been placed.
        </Text>
        <OrderdItem text={orderText} marginLeft={10} />
        <Lottie
          style={{
            height: 400,
            alignSelf: "center",
          }}
          source={require("../creating/animations/111627-product-delivery.json")}
          autoPlay
          speed={0.5}
        />
      </View>
    </SafeAreaView>
  );
}
const OrderdItem = (props) => (
  <View
    style={{ marginTop: 15, justifyContent: "center", alignSelf: "center" }}
  >
    <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.text}</Text>
  </View>
);
