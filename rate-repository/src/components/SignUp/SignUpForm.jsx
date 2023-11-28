import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../Button";
import FormikTextInput from "../FormikInput/FormikTextInput";

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 20,
    padding: 15,
  },
  container: {},
});

const SignUpForm = ({ handleSubmit }) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry
      />
    </View>

    <Button onPress={handleSubmit} title="Sign Up" />
  </View>
);

export default SignUpForm;
