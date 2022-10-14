import { View, StyleSheet } from "react-native";
import { UserCard } from "../Components/UserCard";

export function PostsScreen() {
  return (
    <View style={styles.container}>
      <UserCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#c3c3c3",
    borderTopColor: "#c3c3c3",
  },
});
