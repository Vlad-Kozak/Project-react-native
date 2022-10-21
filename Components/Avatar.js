import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AddIcon from "../assets/images/add.svg";

export default function Avatar({ sendAvatar }) {
  const [avatar, setAvatar] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }

    sendAvatar(avatar);
  };

  return (
    <View style={styles.avatar}>
      {avatar && <Image style={styles.image} source={{ uri: avatar }} />}
      <TouchableOpacity
        activeOpacity={0.5}
        underlayColor="#ffffff"
        onPress={pickImage}
        style={styles.addIcon}
      >
        <AddIcon width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6f6",
    borderRadius: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addIcon: {
    position: "absolute",
    top: 81,
    left: 107,
    width: 25,
    height: 25,
  },
});
