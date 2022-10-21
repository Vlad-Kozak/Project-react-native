import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import CustomButton from "../Components/CustomButton";
import DeleteIcon from "../assets/images/trash.svg";
import MapPinIcon from "../assets/images/map-pin.svg";
import CameraIcon from "../assets/images/camera.svg";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase";
import { useSelector } from "react-redux";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { nanoid } from "nanoid";

export default function CreatePostScreen({ navigation }) {
  const uid = useSelector((state) => state.auth.uid);
  const [cameraRef, setCameraRef] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [location, setLocation] = useState(null);
  const [photoUri, setPhotoUri] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");

  useEffect(() => {
    (async () => {
      const location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  const shot = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhotoUri(uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhotoUri(result.uri);
    }
  };

  const uploadPhotoToServer = async () => {
    try {
      const postId = nanoid();
      const response = await fetch(photo);
      const file = await response.blob();
      const storageRef = ref(storage, `posts/${postId}`);
      await uploadBytesResumable(storageRef, file);
      const uploadedPhoto = await getDownloadURL(storageRef);
      return uploadedPhoto;
    } catch (err) {
      console.log(err);
    }
  };

  const publish = async () => {
    try {
      await addDoc(collection(db, "posts"), {
        location,
        name,
        place,
        photoUri,
        uid,
        comments: [],
      });
      reset();
      navigation.navigate("DefaultPosts");
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    setPhotoUri("");
    setName("");
    setPlace("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {photoUri ? (
            <View style={styles.camera}>
              <Image style={styles.image} source={{ uri: photoUri }} />
            </View>
          ) : permission?.granted ? (
            <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)}>
              <TouchableOpacity style={styles.cameraButton} onPress={shot}>
                <CameraIcon width={24} height={24} />
              </TouchableOpacity>
            </Camera>
          ) : (
            <View style={styles.camera}>
              <TouchableOpacity style={styles.cameraButton}>
                <CameraIcon width={24} height={24} />
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.text}>
              {photoUri ? "Редактировать фото" : "Загрузите фото"}
            </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.name}
            placeholderTextColor="#BDBDBD"
            value={name}
            onChangeText={(name) => {
              setName(name);
            }}
            placeholder="Название..."
          />
          <View style={styles.placeWrap}>
            <TextInput
              style={styles.place}
              placeholderTextColor="#BDBDBD"
              value={place}
              onChangeText={(place) => {
                setPlace(place);
              }}
              placeholder="Местность..."
            />
            <View style={styles.mapPinIcon}>
              <MapPinIcon width={24} height={24} />
            </View>
          </View>
          <View style={styles.submit}>
            {!photoUri || !name || !place || !location ? (
              <CustomButton text="Опубликовать" onPress={publish} disable />
            ) : (
              <CustomButton text="Опубликовать" onPress={publish} />
            )}
          </View>
          <TouchableOpacity style={styles.deleteButton} onPress={reset}>
            <DeleteIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },

  camera: {
    height: 240,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    marginBottom: 32,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 16,
    color: "#BDBDBD",
  },
  name: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 16,
    color: "#212121",
  },
  placeWrap: {
    position: "relative",
  },
  place: {
    height: 50,
    paddingHorizontal: 28,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 16,
    color: "#212121",
  },
  mapPinIcon: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: [{ translateY: -23 }],
  },
  submit: {
    marginTop: 16,
    marginBottom: "auto",
  },
  deleteButton: {
    width: 70,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});
