import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import CustomButton from "./CustomButton";
import Avatar from "./Avatar";

export default function AuthForm({
  type,
  onSubmit,
  onMoveToOtherScreen,
  sendAvatar,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  let containerHeight;
  if (type === "registration") {
    containerHeight = 0.68;
  }
  if (type === "login") {
    containerHeight = 0.6;
  }

  return (
    <View style={{ flex: containerHeight, ...styles.container }}>
      {type === "registration" && (
        <View style={styles.avatar}>
          <Avatar sendAvatar={sendAvatar} />
        </View>
      )}
      <Text style={styles.title}>
        {type === "registration" && "Регистрация"}
        {type === "login" && "Войти"}
      </Text>
      {type === "registration" && (
        <TextInput
          placeholderTextColor="#BDBDBD"
          value={name}
          onChangeText={nameHandler}
          placeholder="Логин"
          style={styles.input}
        />
      )}
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
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.showPassword}
          onPress={onShowPassword}
        >
          <Text style={styles.showPasswordText}>
            {showPassword ? "Скрыть" : "Показать"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        {type === "registration" && (
          <CustomButton
            text={"Зарегистрироваться"}
            onPress={() => {
              onSubmit(name, email, password);
            }}
          />
        )}
        {type === "login" && (
          <CustomButton
            text={"Войти"}
            onPress={() => {
              onSubmit(name, email, password);
            }}
          />
        )}
      </View>
      <TouchableHighlight
        underlayColor="#FFFFFF"
        style={styles.loginLink}
        onPress={onMoveToOtherScreen}
      >
        <Text style={styles.loginText}>
          {type === "registration" && "Уже есть аккаунт? Войти"}
          {type === "login" && "Нет аккаунта? Зарегистрироваться"}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
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
    transform: [{ translateX: -50 }],
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 30,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    height: 50,
    paddingHorizontal: 16,
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
    top: "50%",
    right: 16,
    transform: [{ translateY: -15 }],
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
