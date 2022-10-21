import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function UserCard() {
  const { displayName, email, photoURL } = useSelector((state) => state.auth);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: photoURL }} />
      <View style={styles.textWrap}>
        <Text style={styles.name}>{displayName}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
    resizeMode: "cover",
    backgroundColor: "#bdbdbd",
  },
  name: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
