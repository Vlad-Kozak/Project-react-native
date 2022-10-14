import { StyleSheet, Text, TouchableHighlight } from "react-native";

export function CustomButton({ text, onPress }) {
  return (
    <TouchableHighlight
      underlayColor="#D15900"
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
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
});
