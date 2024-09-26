import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Static mapping of image paths to require statements
const imageMapping = {
  "../assets/first.jpeg": require("../assets/first.jpeg"),
  "../assets/second.jpeg": require("../assets/second.jpeg"),
  "../assets/third.jpeg": require("../assets/third.jpeg"),
  "../assets/fourth.jpeg": require("../assets/fourth.jpeg"),
};

const Card = ({ hostel, addToWishlist, removeFromWishlist, isWishlisted }) => {
  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(hostel);
    } else {
      addToWishlist(hostel);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <Image
          source={
            imageMapping[hostel.image] || require("../assets/fourth.jpeg")
          }
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.heartButton} onPress={toggleWishlist}>
          <Ionicons
            name="heart"
            size={28}
            color={isWishlisted ? "red" : "#000"}
            style={styles.heartIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.name}>{hostel.name}</Text>
        <Text style={styles.priceText}>₹{hostel.price}</Text>
        <Text style={styles.rating}>Rating: {hostel.rating} / 5</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: "42%",
    backgroundColor: "#dedede",
    borderRadius: 8,
    marginHorizontal: "4%",
    marginTop: 12,
    borderColor: "#dedede",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
  },
  top: {
    height: "55%",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bottom: {
    height: "45%",
    backgroundColor: "#fff",
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    padding: 10,
  },
  heartButton: {
    position: "absolute",
    right: 4,
    top: 2,
  },
  heartIcon: {
    padding: 6,
    borderRadius: 19,
  },
  name: {
    marginBottom: 5,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
  },
});
