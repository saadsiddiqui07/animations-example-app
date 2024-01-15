import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cart, Home, Profile, Search } from "./screens";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const BottomTab = createBottomTabNavigator();

const MainBottomNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarBackground: () => (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: "hidden",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              <BlurView
                intensity={80}
                style={{
                  flex: 1,
                  backgroundColor: "transparent",
                }}
              />
            </View>
          ),
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.active : styles.tab}>
                <AntDesign name="home" size={25} color={"#000"} />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.active : styles.tab}>
                <AntDesign name="dribbble" size={25} color={"#000"} />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.active : styles.tab}>
                <AntDesign name="caretcircleoup" size={25} color={"#000"} />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.active : styles.tab}>
                <AntDesign name="profile" size={25} color={"#000"} />
              </View>
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    borderBottomWidth: 2,
    paddingVertical: 8,
  },
  tab: {
    borderBottomWidth: 2,
    paddingVertical: 8,
    borderBottomColor: "transparent",
  },
});

export default MainBottomNavigation;
