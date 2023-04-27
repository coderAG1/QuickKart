import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import PlacesNear, { PlacesToOrder } from "../components/home/PlacesNear";
import BottomTab from "../components/home/BottomTab";
import { Divider } from "react-native-elements";
import { Navigation } from "react-native-navigation";

// resturant near colleges data we need here we done the wrong we taken the wrong api
// const YELP_API_KEY =
//   "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(PlacesToOrder);
  // const [city, setcity] = useState("Mazitar");

  // const getRestaurantsFromYelp = () => {
  //   const yelpUrl =
  //     "https://api.yelp.com/v3/businesses/search?term=restaurants&location";

  //   const apiOptions = {
  //     headers: {
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //     },
  //   };

  //   return fetch(yelpUrl, apiOptions)
  //     .then((res) => res.json())
  //     .then((json) => setRestaurantData(json.businesses));
  // };

  // useEffect(() => {
  //   getRestaurantsFromYelp();
  // }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, paddingTop: 25 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <PlacesNear restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  );
}
