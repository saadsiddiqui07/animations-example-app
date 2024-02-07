import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 22,
        // paddingVertical: 10,
        marginBottom: 20,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ backgroundColor: "red", padding: 12, borderRadius: 999 }}
      >
        <Ionicons name="call-outline" size={25} color={"white"} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ backgroundColor: "white", padding: 12, borderRadius: 999 }}
      >
        <Ionicons name="ios-videocam-outline" size={25} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ backgroundColor: "white", padding: 12, borderRadius: 999 }}
      >
        <Ionicons name="mic-off-outline" size={25} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ backgroundColor: "#334155", padding: 12, borderRadius: 999 }}
      >
        <Ionicons name="hand-right-outline" size={25} color={"white"} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ backgroundColor: "#334155", padding: 12, borderRadius: 999 }}
      >
        <Ionicons name="ellipsis-vertical-outline" size={25} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
