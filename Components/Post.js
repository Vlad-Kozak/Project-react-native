import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapPinIcon from "../assets/images/map-pin.svg";
import CommentsIcon from "../assets/images/comments.svg";

export default function Post({ post, navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: post.photoUri }} />
      <Text style={styles.name}>{post.name}</Text>
      <View style={styles.descWrap}>
        <TouchableOpacity
          style={styles.descCase}
          onPress={() => {
            navigation.navigate("Comments", {
              id: post.id,
              comments: post.comments,
              image: post.photoUri,
            });
          }}
        >
          <CommentsIcon />
          <Text style={styles.comments}>{post.comments.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.descCase}
          onPress={() => {
            navigation.navigate("Map", {
              location: post.location,
              name: post.name,
              place: post.place,
            });
          }}
        >
          <MapPinIcon />
          <Text style={styles.place}>{post.place}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 32 },
  image: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    marginBottom: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
  },
  descWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descCase: {
    flexDirection: "row",
  },
  comments: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#bdbdbd",
  },
  place: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
