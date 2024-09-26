import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const HostelDetailScreen = ({ route }) => {
  const { hostel } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={
          hostel.image
            ? { uri: hostel.image }
            : require("../assets/placeholder.png")
        }
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{hostel.name}</Text>
        <Text style={styles.price}>₹{hostel.price}</Text>
        <Text style={styles.rating}>Rating: {hostel.rating} / 5</Text>
        <Text style={styles.area}>Area: {hostel.area}</Text>
        {/* Add more details as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: "#888",
    marginBottom: 5,
  },
  rating: {
    fontSize: 18,
    marginBottom: 5,
  },
  area: {
    fontSize: 18,
    color: "#555",
  },
});

export default HostelDetailScreen;
