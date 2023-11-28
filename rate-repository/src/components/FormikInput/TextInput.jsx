import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: "100%",
    borderColor: "#d73a4a",
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 5,
  },
});

const TextInput = ({ style, error, ...props }) => {
  if (error) {
    return (
      <NativeTextInput style={styles.input} {...props} autoComplete="off" />
    );
  }
  const textInputStyle = [style];

  return (
    <NativeTextInput style={textInputStyle} {...props} autoComplete="off" />
  );
};

export default TextInput;
