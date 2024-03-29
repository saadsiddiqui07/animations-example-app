import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./components/Header";
import BottomTab from "./components/BottomTab";
import MeetView from "./components/MeetView";
import { height, width } from "./constants";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const Colors = {
  primaryBg: "#0f172a",
};

type ContextType = {
  translateX: number;
  translateY: number;
};

const CONTAINER_HEIGHT = height * 0.7;
const CONTAINER_SCROLL_WIDTH = width * 0.7;

export default function GoogleMeetView() {
  const translateX = useSharedValue(width * 0.3);
  const translateY = useSharedValue(CONTAINER_HEIGHT * 0.3);

  // ISSUE: EVRERYTIME THE POSITION WILL SET TO ZERO AND ANY CALCULATION WILL MAKE IT TANGLED
  // TODO: Calculate the distance from the context values
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context: ContextType) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context: ContextType) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onFinish: (event) => {
      // X will be 40%
      if (event.translationX < -CONTAINER_SCROLL_WIDTH * 0.4) {
        console.log("LEFT BOTTOM");
        translateY.value = withSpring(CONTAINER_HEIGHT * 0.3);
        translateX.value = withSpring(-width * 0.3);
      } else {
        console.log("RIGHT BOTTOM");
        translateY.value = withSpring(CONTAINER_HEIGHT * 0.3);
        translateX.value = withSpring(width * 0.3);
      }
      // const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      // if (
      //   event.translationY > CONTAINER_HEIGHT * 0.1 &&
      //   event.translationX > width * 0.1
      // ) {
      //   console.log("RIGHT BOTTOM");
      //   translateY.value = withSpring(CONTAINER_HEIGHT * 0.3);
      //   translateX.value = withSpring(width * 0.3);
      // }
      // if (
      //   event.translationY > CONTAINER_HEIGHT * 0.1 &&
      //   event.translationX < -width * 0.1
      // ) {
      //   console.log("LEFT BOTTOM");
      //   translateY.value = withSpring(CONTAINER_HEIGHT * 0.3);
      //   translateX.value = withSpring(-width * 0.3);
      // }
      // if (
      //   event.translationY < -CONTAINER_HEIGHT * 0.1 &&
      //   event.translationX > width * 0.1
      // ) {
      //   console.log("RIGHT TOP");
      //   translateY.value = withSpring(-containerHeight * 0.4);
      //   translateX.value = withSpring(width * 0.3);
      // }
      // if (
      //   event.translationY < -containerHeight * 0.1 &&
      //   event.translationX < -width * 0.1
      // ) {
      //   console.log("LEFT TOP");
      //   translateY.value = withSpring(-containerHeight * 0.4);
      //   translateX.value = withSpring(-width * 0.3);
      // } else {
      //   // default position
      // }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={Colors.primaryBg}
      />
      <View style={{ height: height, flex: 1 }}>
        <Header />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <MeetView />
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={[styles.contact, animatedStyle]}>
              <TouchableOpacity
                onPress={() => {
                  translateX.value = withSpring(width * 0.3);
                  translateY.value = withSpring(CONTAINER_HEIGHT * 0.3);
                }}
                activeOpacity={0.8}
                style={{
                  backgroundColor: "#64748b",
                  padding: 8,
                  borderRadius: 999,
                  alignSelf: "center",
                  marginLeft: "auto",
                }}
              >
                <Ionicons name="mic-off-outline" size={18} color={"white"} />
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 999,
                }}
              >
                <Ionicons
                  name="person-circle-outline"
                  size={50}
                  color={"white"}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 13, fontWeight: "bold", color: "white" }}
                >
                  Saad
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: "#64748b",
                    padding: 8,
                    borderRadius: 999,
                    alignSelf: "center",
                    marginLeft: "auto",
                  }}
                >
                  <Ionicons
                    name="ellipsis-vertical-sharp"
                    size={18}
                    color={"white"}
                  />
                </TouchableOpacity>
              </View>
            </Animated.View>
          </PanGestureHandler>
        </View>
        <View style={{ marginTop: "auto" }}>
          <BottomTab />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBg,
  },
  contact: {
    height: height * 0.22,
    width: 120,
    backgroundColor: "#1f2937",
    borderRadius: 20,
    zIndex: 2,
    position: "absolute",
    padding: 10,
    elevation: 10,
  },
});
