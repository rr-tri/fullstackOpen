import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SignInForm from "../../../components/SignIn/SignInForm";
import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
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
describe("SignInContainer", () => {
  it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
    const mockSignIn = jest.fn();

    //* Render the SignInContainer component with the mock signIn function
    const { getByTestId } = render(
      <View>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values) => await mockSignIn(values)}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => <SignInForm handleSubmit={handleSubmit} />}
        </Formik>
      </View>
    );

    //* Fill the text inputs with valid values
    fireEvent.changeText(getByTestId("usernameField"), "kalle");
    fireEvent.changeText(getByTestId("passwordField"), "password");

    //* Press the submit button
    fireEvent.press(getByTestId("submitButton"));

    // Wait for the expectations to pass
    await waitFor(() => {
      // Expect the onSubmit function to have been called once
      expect(mockSignIn).toHaveBeenCalledTimes(1);

      // Expect the onSubmit function to be called with the correct arguments
      expect(mockSignIn).toHaveBeenCalledWith({
        username: "kalle",
        password: "password",
      });
    });
  });
});
