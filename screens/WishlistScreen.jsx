import React from 'react';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "../components/Card";

const WishlistScreen = ({ wishlist, removeFromWishlist }) => {
  return (
    <ScrollView style={styles.container}>
      {wishlist.length === 0 ? (
        <Text style={styles.emptyText}>No items in your wishlist</Text>
      ) : (
        <View style={styles.cardContainer}>
          {wishlist.map((hostel, index) => (
            <Card
              key={index}
              hostel={hostel}
              removeFromWishlist={removeFromWishlist}
              isWishlisted={true}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#777",
  },
});
