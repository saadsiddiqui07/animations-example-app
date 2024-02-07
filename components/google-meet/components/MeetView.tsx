import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";

import People from "./People";
import { DATA } from "../constants";

const MeetView = () => {
  return (
    <View
      style={{
        paddingVertical: "auto",
        paddingHorizontal: 8,
      }}
    >
      <FlatList
        key={"#"}
        numColumns={1}
        contentContainerStyle={{
          alignItems: "center",
        }}
        data={DATA}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => (
          <People
            key={index}
            name={item.name}
            color={item.color}
            speaking={item.speaking}
          />
        )}
      />
    </View>
  );
};

export default MeetView;

const styles = StyleSheet.create({
  contact: {
    height: 180,
    width: 120,
    backgroundColor: "white",
    borderRadius: 20,
    zIndex: 2,
  },
});
