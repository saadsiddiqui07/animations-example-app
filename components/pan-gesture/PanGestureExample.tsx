import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const PanGestureExample = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const pressed = useSharedValue(false);

  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: () => {},
      onActive: (event) => {
        translateX.value = event.translationX;
        translateY.value = event.translationY;
        pressed.value = true;
      },
      onEnd: () => {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        pressed.value = false;
      },
    });

  const animatedXStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        {
          translateY: translateY.value,
        },
        { scale: withTiming(pressed.value ? 1.2 : 1) },
      ],
      backgroundColor: pressed.value ? "#FFE04B" : "#b58df1",
    };
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.square, animatedXStyle]} />
      </PanGestureHandler>
    </View>
  );
};

export default PanGestureExample;

const styles = StyleSheet.create({
  square: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: "teal",
  },
});
