import { View, StyleSheet } from "react-native";
import FormikTextInput from "../FormikInput/FormikTextInput";
import Button from "../Button";
const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 20,
    padding: 15,
  },
  container: {},
});

const SignInForm = ({ handleSubmit }) => {
  return (
    <View style={styles?.container}>
      <View style={styles?.inputContainer}>
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
      </View>
      <Button testID="submitButton" onPress={handleSubmit} title="Sign in" />
    </View>
  );
};
export default SignInForm;
