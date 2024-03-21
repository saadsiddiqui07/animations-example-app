import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";

const data = [
  "https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200",
];

export const Home = () => {
  const bottomTab = useBottomTabBarHeight();
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
          paddingVertical: 16,
          gap: 16,
          paddingBottom: bottomTab,
        }}
        keyExtractor={(_, index) => `${index}-img`}
        renderItem={({ item, index }) => {
          return (
            <Image
              key={index}
              source={{ uri: item }}
              style={{ width: "100%", height: 250, borderRadius: 20 }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export const Search = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Search screen</Text>
    </SafeAreaView>
  );
};

export const Cart = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Cart screen</Text>
    </SafeAreaView>
  );
};

export const Profile = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Profile screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
