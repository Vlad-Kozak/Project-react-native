import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { AuthForm } from "../Components/AuthForm";

export function LoginScreen({ navigation }) {
  const onLogin = (name, email, password) => {
    console.log({
      email,
      password,
    });
    navigation.navigate("Home");
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
