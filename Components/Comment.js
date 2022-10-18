import { Image, StyleSheet, Text, View } from "react-native";

export default function Comment() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/bg.jpg")} />
      <View style={styles.commentWrap}>
        <Text style={styles.comment}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Recusandae unde nostrum maxime!
        </Text>
        <Text style={styles.date}>21.21.2222</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  commentWrap: {
    width: "87%",
    padding: 16,
    borderRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  comment: {
    marginBottom: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#212121",
  },
  date: {
    marginLeft: "auto",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    color: "#bdbdbd",
  },
});
