import { View, StyleSheet } from "react-native";
import { Post } from "../Components/Post";
import { UserCard } from "../Components/UserCard";

export function PostsDefaultScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.userCardWrap}>
        <UserCard />
      </View>
      <Post navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#ffffff",
  },
  userCardWrap: {
    marginBottom: 32,
  },
});
