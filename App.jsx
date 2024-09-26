import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Homepage";
import WishlistScreen from "./screens/WishlistScreen";
import DetailsScreen from "./screens/DetailsScreen"; // Import the new screen
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Create the Tab Navigator
const TabNavigator = ({ wishlist, addToWishlist, removeFromWishlist }) => (
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
);

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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tab Navigator as the initial screen */}
        <Stack.Screen name="Main">
          {(props) => (
            <TabNavigator
              {...props}
              wishlist={wishlist}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
            />
          )}
        </Stack.Screen>
        {/* Screen without tabs */}
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
