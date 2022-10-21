import { signInWithEmailAndPassword } from "firebase/auth";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch } from "react-redux";
import AuthForm from "../Components/AuthForm";
import { auth } from "../firebase";
import { authActions } from "../redux/auth/authSlice";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  const onLogin = async (name, eMail, password) => {
    try {
      await signInWithEmailAndPassword(auth, eMail, password);

      const { displayName, photoURL, uid, email } = auth.currentUser;
      dispatch(authActions.login({ displayName, photoURL, uid, email }));
    } catch (error) {
      console.log(error);
    }
  };

  const onMoveToRegistrationScreen = () => {
    navigation.navigate("Registration");
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
            type="login"
            onSubmit={onLogin}
            onMoveToOtherScreen={onMoveToRegistrationScreen}
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
