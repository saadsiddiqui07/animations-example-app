import { Dimensions } from "react-native";

// right bottom --> X = w * 0.25, Y = h * 0.25       // right top --> X = w * 0.25, Y = -h * 0.25
// left bottom --> X = -w * 0.25, Y = h * 0.25   // top left --> X = -w * 0.25, Y = -h * 0.25

// if (
//       event.translationY > containerHeight * 0.1 &&
//       event.translationX > width * 0.1
//     ) {
//       // RIGHT BOTTOM
//       translateY.value = withSpring(containerHeight * 0.4);
//       translateX.value = withSpring(width * 0.25);
//     } else

const { width, height } = Dimensions.get("screen");

export { width, height };

export const DATA = [
  {
    id: 1,
    name: "Nathan",
    color: "#38bdf8",
    speaking: true,
  },
  {
    id: 2,
    name: "Evan",
    color: "#bef264",
  },
  {
    id: 3,
    name: "Joseph",
    color: "#c4b5fd",
  },
];
