import React from "react";
import { SafeAreaView } from "react-native";
import { View, Text } from "react-native";
import Lottie from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
export default function Log() {
  const navigation = useNavigation();
  const handleLogInPress = () => {
    navigation.navigate("LogIn");
  };
  const handleLogInPress2 = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#eee",
        paddingTop: 25,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
          alignSelf: "center",
          height: "100%",
        }}
      >
        <Lottie
          style={{
            marginTop: 25,
            height: 150,
            alignSelf: "center",
            marginBottom: 5,
          }}
          source={require("../creating/animations/39070-scan-products.json")}
          autoPlay
          speed={0.5}
        />
        <View
          style={{
            marginTop: 45,
            alignSelf: "center",
            height: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 34,
              color: "#404040",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Welcome To QuickKart
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#404040",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Order food, grocerys, medicine from local shops around you.
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                marginTop: 40,
                backgroundColor: "#404040",
                alignItems: "center",
                padding: 8,
                borderRadius: 30,
                width: 350,
                position: "relative",
              }}
              onPress={handleLogInPress}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                alignItems: "center",
                padding: 8,
                borderRadius: 30,
                width: 350,
                position: "relative",
                borderWidth: 1.5,
                borderColor: "#404040",
              }}
              onPress={handleLogInPress2}
            >
              <Text
                style={{ color: "#404040", fontSize: 20, fontWeight: "bold" }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
