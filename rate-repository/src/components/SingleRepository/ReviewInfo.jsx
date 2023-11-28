import { View, StyleSheet, Alert } from "react-native";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";

import { DELETE_REVIEW } from "../../graphql/mutations";
import Text from "../Text";
import Button from "../Button";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
  },
  reviewItemContainer: {
    display: "flex",
    padding: 15,
    paddingBottom: 0,
    flexDirection: "row",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviewInfo: {
    paddingRight: 15,
    paddingLeft: 15,
    maxWidth: "90%",
  },

  separator: {
    height: 10,
  },
  ratingContainer: {
    height: 50,
  },
  rating: {
    borderWidth: 4,
    borderColor: "#0065e1",
    width: 50,
    height: 50,
    borderRadius: 25,
    textAlign: "center",
    textAlignVertical: "center",
  },
  paragraph: {
    textAlign: "justify",
  },
});

const ReviewInfo = ({ style, review, heading, refetch }) => {
  const navigate = useNavigate();
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const day = String(new Date(review.createdAt).getUTCDate()).padStart(2, "0");
  const month = String(new Date(review.createdAt).getUTCMonth() + 1).padStart(
    2,
    "0"
  );
  const year = String(new Date(review.createdAt).getUTCFullYear());

  const formattedDate = `${day}.${month}.${year}`;
  // console.log(review);
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.reviewItemContainer]}>
        <View style={styles.ratingContainer}>
          <Text
            color="primary"
            fontWeight="bold"
            fontSize={"subheading"}
            style={styles.rating}
          >
            {review.rating}
          </Text>
        </View>
        <View style={[styles.reviewInfo]}>
          <Text fontWeight="bold" fontSize={"subheading"}>
            {heading === "user"
              ? review.user.username
              : review.repository.fullName}
          </Text>
          <Text color="textSecondary" fontSize={"body"}>
            {formattedDate}
          </Text>
          <Text style={styles.paragraph} color="textPrimary" fontSize={"body"}>
            {review.text}
          </Text>
        </View>
      </View>
      {heading !== "user" && (
        <View style={styles.buttonGroup}>
          <Button
            onPress={() => {
              navigate(`/repository/${review.repository.id}`);
              console.log("open this repository", review.repository.id);
            }}
            color="#0165d4"
            title="view repository"
            accessibilityLabel="Button to view repository"
          />
          <Button
            onPress={() => {
              console.log("Delete this review", {
                deleteReviewId: review.id,
              });
              Alert.alert(
                "Delete review",
                "Are you sure you want to delete this review ?",
                [
                  {
                    text: "CANCEL",
                    onPress: () => {},
                    style: "cancel",
                  },
                  {
                    text: "DELETE",
                    onPress: async () => {
                      const { data } = await mutate({
                        variables: { deleteReviewId: review.id },
                      });
                      if (data) {
                        console.log("deleted : ", data?.deleteReview);
                        refetch();
                      }
                    },
                  },
                ]
              );
            }}
            color="#d6394c"
            title="Delete review"
            accessibilityLabel="Button to delete repository"
          />
        </View>
      )}
    </View>
  );
};
export default ReviewInfo;
