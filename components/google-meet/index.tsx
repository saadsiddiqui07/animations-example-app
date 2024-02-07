import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./components/Header";
import BottomTab from "./components/BottomTab";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
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

const containerHeight = height * 0.7;

type ContextType = {
  translateX: number;
  translateY: number;
};

export default function GoogleMeetView() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    },
    onActive: (event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  // const panGestureEvent = Gesture.Pan()
  //   .onUpdate((event) => {
  //     if (event) {
  //       translateX.value = event.translationX;
  //       translateY.value = event.translationY;
  //     }
  //   })
  //   .onFinalize((event) => {
  //     if (
  //       event.translationY > containerHeight * 0.1 &&
  //       event.translationX > width * 0.1
  //     ) {
  //       // RIGHT BOTTOM
  //       translateY.value = withSpring(containerHeight * 0.3);
  //       translateX.value = withSpring(width * 0.3);
  //     } else if (
  //       event.translationY > containerHeight * 0.1 &&
  //       event.translationX < -width * 0.1
  //     ) {
  //       // LEFT BOTTOM
  //       translateY.value = withSpring(containerHeight * 0.3);
  //       translateX.value = withSpring(-width * 0.3);
  //     } else if (
  //       event.translationY < -containerHeight * 0.1 &&
  //       event.translationX > width * 0.1
  //     ) {
  //       // RIGHT TOP
  //       translateY.value = withSpring(-containerHeight * 0.4);
  //       translateX.value = withSpring(width * 0.3);
  //     } else if (
  //       event.translationY < -containerHeight * 0.1 &&
  //       event.translationX < -width * 0.1
  //     ) {
  //       // LEFT TOP
  //       translateY.value = withSpring(-containerHeight * 0.4);
  //       translateX.value = withSpring(-width * 0.3);
  //     } else {
  //       // DEFAULT POSITION
  //       translateY.value = withSpring(containerHeight * 0.3);
  //       translateX.value = withSpring(width * 0.3);
  //     }
  //   });

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
          {/* <GestureDetector gesture={panGestureEvent}>
              <Animated.View style={[styles.contact, animatedStyle]}>
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
            </GestureDetector> */}
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
