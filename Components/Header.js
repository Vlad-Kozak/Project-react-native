import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoutIcon from "../assets/images/log-out.svg";
import LeftArrowIcon from "../assets/images/arrow-left.svg";

export function Header({ onClickBack, onClickLogout, logout, back, title }) {
  return (
    <View style={styles.container}>
      {back && (
        <TouchableOpacity style={styles.back} onPress={onClickBack}>
          <LeftArrowIcon width={24} height={24} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {logout && (
        <TouchableOpacity style={styles.logout} onPress={onClickLogout}>
          <LogoutIcon width={24} height={24} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 88,
    flex: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#c3c3c3",
  },
  title: {
    padding: 11,
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 17,
    color: "#212121",
  },
  logout: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  back: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
});
