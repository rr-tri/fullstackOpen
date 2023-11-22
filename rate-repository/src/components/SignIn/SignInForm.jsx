import { View, Button } from "react-native";
import FormikTextInput from "./FormikTextInput";

const SignInForm = ({ handleSubmit, styles }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Button onPress={handleSubmit} title="Sign in" />
    </View>
  );
};
export default SignInForm;
