import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { firebase } from "../../firebase";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";

export default function OrderBox({ props, setModalVisible }) {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const { name } = route.params;
  const navigation = useNavigation();
  const addOrderToFireBase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("order")
      .add({
        text: inputValue,
        name: name,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        setModalVisible(false);
        navigation.navigate("OrderComplete", {
          name: name,
          orderId: docRef.id,
          orderText: inputValue,
        });
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  return (
    <>
      <View>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Write Order.."
          style={styles.textInput}
          editable
          multiline
          numberOfLines={2}
        />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "black",
              alignItems: "center",
              padding: 8,
              borderRadius: 30,
              width: 250,
              position: "relative",
            }}
            onPress={() => {
              addOrderToFireBase(props);
              setModalVisible(true);
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Lottie
            style={{ height: 200 }}
            source={require("../../creating/animations/140873-wait-for-animation.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 40,
    marginTop: 50,
    width: "100%",
    fontWeight: "700",
    fontSize: 18,
  },
});
