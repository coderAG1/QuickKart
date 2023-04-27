import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { useEffect } from "react";
export default function LogIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    setIsLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in successfully:", user.email);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
          Log In
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
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
          editable={!isLoading}
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
          editable={!isLoading}
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
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
