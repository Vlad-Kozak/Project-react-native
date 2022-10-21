import { useDispatch } from "react-redux";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import AuthForm from "../Components/AuthForm";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { authActions } from "../redux/auth/authSlice";
import { useState } from "react";

export default function RegistrationScreen({ navigation }) {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);

  const onRegistration = async (name, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: avatar,
      });

      const { displayName, photoURL, uid, email } = auth.currentUser;
      dispatch(authActions.login({ displayName, photoURL, uid, email }));
    } catch (error) {
      console.log(error);
    }
  };

  const onMoveToLoginScreen = () => {
    navigation.navigate("Login");
  };

  const sendAvatar = (uri) => {
    setAvatar(uri);
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../assets/images/bg.jpg")}
          resizeMode="cover"
          style={styles.bg}
        >
          <AuthForm
            type="registration"
            onSubmit={onRegistration}
            onMoveToOtherScreen={onMoveToLoginScreen}
            sendAvatar={sendAvatar}
          />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bg: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
