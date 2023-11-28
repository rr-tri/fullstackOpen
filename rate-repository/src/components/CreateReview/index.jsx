import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import useAddReview from "../../hooks/useAddReview";
import CreateReviewForm from "./CreateReviewForm";

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository Owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(0, "Rating must be at least 0")
    .max(100, "Rating must be at most 100"),
  text: yup.string(),
});
const CreateReview = () => {
  const navigate = useNavigate();
  const [create] = useAddReview();
  const onSubmit = async (values) => {
    // console.log("values on submit", values);
    const { createReview } = await create(values);
    if (createReview) {
      navigate(`/repository/${createReview.repositoryId}`);
    }
  };
  return (
    <View>
      <Formik
        initialValues={{
          ownerName: "",
          repositoryName: "",
          rating: "",
          text: "",
        }}
        onSubmit={async (values) => await onSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <CreateReviewForm handleSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};
export default CreateReview;
