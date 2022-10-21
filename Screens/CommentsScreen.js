import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Comment from "../Components/Comment";
import UpArrowIcon from "../assets/images/arrow-up.svg";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";

export default function CommentsScreen({ route }) {
  const { id, image } = route.params;
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState("");
  const { uid, photoURL } = useSelector((state) => state.auth);

  const getAllComments = async () => {
    const querySnapshot = await getDocs(
      collection(db, "posts", `${id}`, "comments")
    );
    let allComments = [];
    querySnapshot.forEach((doc) => {
      allComments.push({ ...doc.data(), id: doc.id });
    });
    setComments(allComments);
  };

  useEffect(() => {
    getAllComments();
  });

  const sendComment = async () => {
    if (commentText.trim().length === 0) {
      return;
    }

    try {
      const createdAt = new Date().toLocaleString();
      await addDoc(collection(db, "posts", `${id}`, "comments"), {
        commentText,
        uid,
        createdAt,
        photoURL,
      });
    } catch (error) {
      console.error(error);
    }

    setCommentText("");
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        style={styles.container}
        ListHeaderComponent={
          <Image style={styles.image} source={{ uri: image }} />
        }
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Comment comment={item} />}
      />
      <View style={styles.inputWrap}>
        <TextInput
          style={styles.input}
          value={commentText}
          onChangeText={(text) => {
            setCommentText(text);
          }}
          placeholder="Комментировать..."
          placeholderTextColor="#BDBDBD"
        />
        <TouchableOpacity style={styles.icon} onPress={sendComment}>
          <UpArrowIcon width={10} height={14} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
    borderRadius: 8,
    marginVertical: 32,
  },
  inputWrap: {
    position: "relative",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#e8e8e8",
    paddingLeft: 16,
  },
  icon: {
    position: "absolute",
    right: 8,
    top: "50%",
    transform: [{ translateY: -16 }],
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
  },
});
