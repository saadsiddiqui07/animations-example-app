import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { height, width } from "../constants";

const People = ({
  name,
  color,
  speaking,
}: {
  name: string;
  color: string;
  speaking?: boolean;
}) => {
  return (
    <View style={speaking ? styles.active : styles.main}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: speaking ? "white" : "#64748b",
          padding: 8,
          borderRadius: 999,
          alignSelf: "center",
          marginLeft: "auto",
        }}
      >
        <Ionicons
          name={speaking ? "mic-outline" : "mic-off-outline"}
          size={22}
          color={speaking ? "#2563eb" : "white"}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 999,
        }}
      >
        <Ionicons name="person-circle-outline" size={70} color={color} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
          {name}
        </Text>
        <Ionicons name="ellipsis-vertical-outline" size={18} color={"white"} />
      </View>
    </View>
  );
};

export default People;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#334155",
    padding: 10,
    borderRadius: 10,
    height: height * 0.22,
    width: width * 0.45,
    marginTop: 20,
  },
  active: {
    backgroundColor: "#334155",
    padding: 10,
    borderRadius: 10,
    height: height * 0.22,
    width: width * 0.45,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#64748b",
  },
});
