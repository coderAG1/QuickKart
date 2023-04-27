import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import PhoneInput from "react-native-phone-input";
import { useNavigation } from "@react-navigation/native";
import { auth, firebase } from "../firebase";

export default function SignUp() {
  const navigation = useNavigation();
  const [regNumber, setRegNumber] = useState("");
  const [Name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const { uid } = userCredentials.user;
        const userRef = firebase.firestore().collection("users").doc(uid);
        userRef
          .set({
            Name,
            email,
            number,
            regNumber,
          })
          .then(() => {
            console.log("User is signed up successfully!");
            navigation.navigate("Home");
          })
          .catch((error) => {
            console.error("Error adding user to Firestore: ", error);
            alert(error.message);
          });
      })
      .catch((error) => alert(error.message));
    setName("");
    setEmail("");
    setNumber("");
    setRegNumber("");
    setPassword("");
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, paddingTop: 25 }}>
      <View style={{ backgroundColor: "white", padding: 15, height: "100%" }}>
        <Text
          style={{
            margin: 20,
            fontSize: 40,
            fontWeight: "bold",
            color: "#404040",
          }}
        >
          Sign up
        </Text>
        <TextInput
          value={Name}
          onChangeText={setName}
          placeholder="Name"
          clearTextOnFocus={true}
          style={{
            borderWidth: 1.5,
            borderColor: "gray",
            borderRadius: 50,
            padding: 10,
            marginTop: 40,
            width: "90%",
            fontWeight: "400",
            fontSize: 18,
            margin: 18,
          }}
          editable
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          clearTextOnFocus={true}
          style={{
            borderWidth: 1.5,
            borderColor: "gray",
            borderRadius: 50,
            padding: 10,
            marginTop: 40,
            width: "90%",
            fontWeight: "400",
            fontSize: 18,
            margin: 18,
            marginTop: 10,
          }}
          editable
        />
        <PhoneInput
          value={number}
          onChangePhoneNumber={setNumber}
          initialCountry="in" // Set the initial country to United States
          placeholder="Phone Number"
          clearTextOnFocus={true}
          style={{
            borderWidth: 1.5,
            borderColor: "gray",
            borderRadius: 50,
            padding: 10,
            marginTop: 40,
            width: "90%",
            fontWeight: "400",
            fontSize: 1891,
            margin: 18,
            marginTop: 10,
          }}
          editable
        />
        <TextInput
          value={regNumber}
          onChangeText={setRegNumber}
          placeholder="Registration Number"
          clearTextOnFocus={true}
          style={{
            borderWidth: 1.5,
            borderColor: "gray",
            borderRadius: 50,
            padding: 10,
            marginTop: 40,
            width: "90%",
            fontWeight: "400",
            fontSize: 18,
            margin: 18,
            marginTop: 10,
          }}
          editable
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          style={{
            borderWidth: 1.5,
            borderColor: "gray",
            borderRadius: 50,
            padding: 10,
            marginTop: 40,
            width: "90%",
            fontWeight: "400",
            fontSize: 18,
            margin: 18,
            marginTop: 18,
          }}
          editable
        />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "#404040",
              alignItems: "center",
              padding: 8,
              borderRadius: 30,
              width: "90%",
              position: "relative",
            }}
            onPress={handleSignup}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
