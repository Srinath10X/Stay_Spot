import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Homepage";
import WishlistScreen from "./screens/WishlistScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (hostel) => {
    if (!wishlist.some((item) => item.name === hostel.name)) {
      setWishlist([...wishlist, hostel]);
    }
  };

  const removeFromWishlist = (hostel) => {
    setWishlist(wishlist.filter((item) => item.name !== hostel.name));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={26} color={color} />
            ),
            tabBarStyle: {
              shadowColor: "transparent",
              borderTopWidth: 0,
            },
          }}
        >
          {(props) => (
            <HomeScreen
              {...props}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
              wishlist={wishlist}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Wishlist"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="heart" size={24} color={color} />
            ),
            tabBarStyle: {
              shadowColor: "transparent",
              borderTopWidth: 0,
            },
          }}
        >
          {(props) => (
            <WishlistScreen
              {...props}
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
