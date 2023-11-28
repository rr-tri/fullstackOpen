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
const CreateReviewForm = ({ handleSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FormikTextInput
          testID="ownerNameField"
          name="ownerName"
          placeholder="Repository Owner Name"
        />
        <FormikTextInput
          testID="repositoryNameField"
          name="repositoryName"
          placeholder="Repository Name"
        />
        <FormikTextInput
          testID="ratingField"
          name="rating"
          placeholder="Rating between 0 and 100"
        />
        <FormikTextInput
          testID="reviewField"
          name="text"
          placeholder="Review"
        />
      </View>
      <Button title="Create" onPress={handleSubmit} />
    </View>
  );
};
export default CreateReviewForm;
