import React, { useState, useSelector } from "react";
import { View, Text, Image, Modal, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import OrderBox from "./OrderBox";

const text = "Menu";

const menu =
  "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/j/y/m101397-1668491248637327f079389.jpg?tr=tr:n-medium";

// const title = "CLICK HERE TO ORDER";

export default function MenuImage() {
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const { name } = route.params;
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalCheckoutContainer: {
      backgroundColor: "white",
      height: 450,
      padding: 16,
      borderwidth: 1,
    },
    name: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 30,
      marginTop: 50,
    },
  });
  const checkoutModalCenter = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.name}>{name}</Text>
            <OrderBox setModalVisible={setModalVisible} />
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalCenter()}
      </Modal>
      <View>
        <UperText text={text} />
        <Menu menu={menu} />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              marginTop: 5,
              backgroundColor: "black",
              alignItems: "center",
              padding: 8,
              borderRadius: 30,
              width: 300,
              position: "relative",
            }}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              CLICK HERE TO ORDER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const UperText = (props) => (
  <Text
    style={{
      alignSelf: "center",
      fontSize: 18,
      fontWeight: "600",
    }}
  >
    {props.text}
  </Text>
);
const Menu = (props) => (
  <Image
    source={{ uri: props.menu }}
    style={{ width: "60%", height: 350, alignSelf: "center" }}
  />
);
