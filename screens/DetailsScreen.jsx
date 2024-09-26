import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const imageMapping = {
  "../assets/first.jpeg": require("../assets/first.jpeg"),
  "../assets/second.jpeg": require("../assets/second.jpeg"),
  "../assets/third.jpeg": require("../assets/third.jpeg"),
  "../assets/fourth.jpeg": require("../assets/fourth.jpeg"),
};

const DetailsScreen = ({ route, navigation }) => {
  const { hostel } = route.params;

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
      <Text style={styles.location}>location: {hostel.location}</Text>
      <Text>Ac/Non-Ac: {hostel.ac}</Text>
      <Text>Wifi: {hostel.wifi}</Text>
      <Text>Washing Machine: {hostel.washing_machine}</Text>
      <Text>Power Backup: {hostel.power_backup}</Text>
      <Text>Security: {hostel.security}</Text>
      <Text>CCTV: {hostel.cctv}</Text>
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
    marginBottom: 1,
  },
  icon: {
    color: "#1e1e1e",
  },
  location: {
    fontSize: 14,
    fontWeight: "semibold",
  },
});
