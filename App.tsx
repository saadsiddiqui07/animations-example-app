import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ParallaxCarousel from "./components/parallax-carousel";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <PanGestureExample /> */}
        {/* <MainBottomNavigation /> */}
        <ParallaxCarousel />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
