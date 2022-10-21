import { Image, StyleSheet, Text, View } from "react-native";

export default function Comment({ comment }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: comment.photoURL }} />
      <View style={styles.commentWrap}>
        <Text style={styles.comment}>{comment.commentText}</Text>
        <Text style={styles.date}>{comment.createdAt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: "#bdbdbd",
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
