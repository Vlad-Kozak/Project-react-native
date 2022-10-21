import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import LogOutButton from "../Components/LogOutButton";
import Avatar from "../Components/Avatar";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";
import Post from "../Components/Post";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "firebase/auth";
import { authActions } from "../redux/auth/authSlice";

export default function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const { uid, displayName } = useSelector((state) => state.auth);

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

  const sendAvatar = async (uri) => {
    try {
      await updateProfile(auth.currentUser, {
        photoURL: uri,
      });

      const { photoURL } = auth.currentUser;
      dispatch(authActions.updateAvatar({ photoURL }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/images/bg.jpg")}
        resizeMode="stretch"
        style={styles.bg}
      >
        <View style={styles.container}>
          <View style={styles.avatar}>
            <Avatar sendAvatar={sendAvatar} />
          </View>
          <View style={styles.logout}>
            <LogOutButton />
          </View>
          <Text style={styles.name}>{displayName}</Text>
          {posts.map((el) => (
            <Post key={el.id} post={el} navigation={navigation} />
          ))}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  container: {
    position: "relative",
    flex: 1,
    marginTop: 150,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  addIcon: {},
  logout: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  name: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
});
