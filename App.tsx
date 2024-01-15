import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PanGestureExample from "./components/pan-gesture/PanGestureExample";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainBottomNavigation from "./components/blur-bottomTab/main";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <PanGestureExample /> */}
        <MainBottomNavigation />
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
