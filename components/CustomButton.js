import { StyleSheet, Text, TouchableHighlight } from "react-native";

export default function CustomButton({ text, onPress, disable = false }) {
  return (
    <TouchableHighlight
      underlayColor={disable ? "f6f6f6" : "#D15900"}
      style={{
        ...styles.button,
        backgroundColor: disable ? "#f6f6f6" : "#FF6C00",
      }}
      onPress={disable ? () => {} : onPress}
    >
      <Text
        style={{ ...styles.buttonText, color: disable ? "#bdbdbd" : "#ffffff" }}
      >
        {text}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
  },
});
