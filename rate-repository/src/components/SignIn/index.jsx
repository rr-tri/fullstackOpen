import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import SignInForm from "./SignInForm";
import useSignIn from "../../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Username is required"),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { authenticate } = await signIn({ username, password });
      if (authenticate) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <SignInForm handleSubmit={handleSubmit} styles={styles} />
        )}
      </Formik>
    </View>
  );
};

export default SignIn;

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
