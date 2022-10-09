import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import AuthForm from "../Components/AuthForm";

export function RegistrationScreen({ navigation }) {
  const onRegistration = (name, email, password) => {
    console.log({
      name,
      email,
      password,
    });
  };

  const onMoveToLoginScreen = () => {
    navigation.navigate("Login");
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
