import { View, Button, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const SignInForm = ({ handleSubmit }) => {
  return (
    <View style={styles?.container}>
      <FormikTextInput
        testID="usernameField"
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        testID="passwordField"
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <Button testID="submitButton" onPress={handleSubmit} title="Sign in" />
    </View>
  );
};
export default SignInForm;
