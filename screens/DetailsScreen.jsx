import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Static mapping of image paths to require statements (optional, if not already used globally)
const imageMapping = {
  "../assets/first.jpeg": require("../assets/first.jpeg"),
  "../assets/second.jpeg": require("../assets/second.jpeg"),
  "../assets/third.jpeg": require("../assets/third.jpeg"),
  "../assets/fourth.jpeg": require("../assets/fourth.jpeg"),
};

const DetailsScreen = ({ route, navigation }) => {
  const { hostel } = route.params; // Retrieve hostel data passed via navigation

  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        style={{ marginTop: 10, paddingVertical: 16 }}
        onPress={() => navigation.goBack()}
      />
      <Image
        source={imageMapping[hostel.image] || require("../assets/fourth.jpeg")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>{hostel.name}</Text>
      <Text style={styles.price}>Price: ₹{hostel.price}</Text>
      <Text style={styles.rating}>Rating: {hostel.rating} / 5</Text>
      <Text style={styles.description}>{hostel.description}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});
