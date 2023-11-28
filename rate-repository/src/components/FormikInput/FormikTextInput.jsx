import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "../Text";
const styles = StyleSheet.create({
  errorText: {
    marginBottom: 5,
    color: "#d73a4a",
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#afafaf",
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 20,
  },
});
const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.input}
        {...props}
      />

      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
