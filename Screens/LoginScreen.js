import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onRegistration = () => {
    console.log({
      email,
      password,
    });
  };

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLogin = () => {};

  return (
    <ImageBackground
      source={require("../assets/images/bg.jpg")}
      resizeMode="cover"
      style={styles.bg}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <Text style={styles.title}>Войти</Text>
            <TextInput
              placeholderTextColor="#BDBDBD"
              value={email}
              onChangeText={emailHandler}
              placeholder="Адрес электронной почты"
              style={styles.input}
            />
            <View style={styles.passwordWrap}>
              <TextInput
                placeholderTextColor="#BDBDBD"
                value={password}
                onChangeText={passwordHandler}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
                style={styles.input}
              />
              <TouchableHighlight
                underlayColor="#F6F6F6"
                style={styles.showPassword}
                onPress={onShowPassword}
              >
                <Text style={styles.showPasswordText}>
                  {showPassword ? "Скрыть" : "Показать"}
                </Text>
              </TouchableHighlight>
            </View>
            <TouchableHighlight
              underlayColor="#D15900"
              style={styles.button}
              onPress={onRegistration}
            >
              <Text style={styles.buttonText}>Войти</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#FFFFFF"
              style={styles.loginLink}
              onPress={onLogin}
            >
              <Text style={styles.loginText}>
                Нет аккаунта? Зарегистрироваться
              </Text>
            </TouchableHighlight>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    position: "relative",
    flex: 0.6,
    alignItems: "stretch",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  avatar: {
    position: "absolute",
    left: "50%",
    top: -60,
    transform: [{ translateX: -66 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6f6",
    borderRadius: 16,
  },
  addIcon: {
    position: "absolute",
    top: 81,
    left: 107,
    width: 25,
    height: 25,
  },
  title: {
    marginVertical: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 30,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    lineHeight: 16,
  },
  passwordWrap: {
    position: "relative",
  },
  showPassword: {
    position: "absolute",
    top: 18,
    right: 16,
  },
  showPasswordText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 16,
    color: "#1B4371",
  },
  button: {
    marginTop: 27,
    marginBottom: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
    color: "#ffffff",
  },
  loginLink: {},
  loginText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});
