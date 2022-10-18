import { Image, StyleSheet, Text, View } from "react-native";
import Comment from "../Components/Comment";

export function CommentsScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/bg.jpg")} />
      <View>
        <Comment />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
    borderRadius: 8,
    marginVertical: 32,
  },
});
