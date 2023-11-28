import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import SignUpForm from "./SignUpForm";
import useSignUp from "../../hooks/useSignUp";
import useSignIn from "../../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import Text from "../Text";
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username must be at least 5 characters")
    .max(30, "Username must be at most 30 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters")
    .max(50, "Password must be at most 50 characters"),
  passwordConfirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    console.log("On submit values", values);
    try {
      const { username, password } = values;
      const { createUser } = await signUp({ username, password });

      if (createUser) {
        const { authenticate } = await signIn({ username, password });
        if (authenticate) {
          navigate("/");
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: "", password: "", passwordConfirmation: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ handleSubmit }) => <SignUpForm handleSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUp;
