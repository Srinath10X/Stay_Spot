import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Card from "../components/Card";
import { hostels as hstl } from "../api/api.json";

const HomeScreen = ({
  navigation,
  addToWishlist,
  removeFromWishlist,
  wishlist,
}) => {
  const [hostels, setHostels] = useState(hstl);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHostels = hostels.filter((hostel) =>
    hostel.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <View
        style={{
          backgroundColor: "#dedede",
          width: "92%",
          marginHorizontal: "4%",
          borderRadius: 8,
        }}
      >
        <Entypo
          name="magnifying-glass"
          size={24}
          style={{
            position: "absolute",
            margin: 5,
            left: 8,
            top: 6,
            opacity: 0.3,
          }}
        />
        <TextInput
          placeholder="Search location"
          style={{ paddingLeft: 44, paddingVertical: 10 }}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 20 }}>
        {filteredHostels.map((hostel, index) => (
          <Card
            key={index}
            hostel={hostel}
            addToWishlist={addToWishlist}
            removeFromWishlist={removeFromWishlist}
            isWishlisted={wishlist.some((item) => item.name === hostel.name)}
          />
        ))}
      </View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default HomeScreen;
