import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 22,
        paddingVertical: 10,
      }}
    >
      <Ionicons name="arrow-back" color={"#fff"} size={25} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "700" }}>
          Daily Standup
        </Text>
        <Ionicons name="caret-forward-outline" color={"#fff"} size={18} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <Ionicons name="bluetooth" color={"#fff"} size={25} />
        <Ionicons name="reload-circle-outline" color={"#fff"} size={25} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
