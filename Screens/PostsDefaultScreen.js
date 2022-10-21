import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Post from "../Components/Post";
import UserCard from "../Components/UserCard";
import { db } from "../firebase";

export default function PostsDefaultScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const uid = useSelector((state) => state.auth.uid);

  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const storage = [];
    querySnapshot.forEach((doc) => {
      storage.push({ ...doc.data(), id: doc.id });
    });
    const filteredStorage = storage.filter((el) => el.uid === uid);
    setPosts(filteredStorage);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts"),
      (snapshot) => {
        getPosts();
      },
      (error) => {
        console.log(error);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={<UserCard />}
      ListHeaderComponentStyle={styles.userCardWrap}
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Post post={item} navigation={navigation} />}
    />
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
