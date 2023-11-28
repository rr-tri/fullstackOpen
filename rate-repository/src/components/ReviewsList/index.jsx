import { FlatList, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import Text from "../Text";
import ReviewInfo from "../SingleRepository/ReviewInfo";
import useCurrentUser from "../../hooks/useCurrentUser";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    margin: 5,
    marginBottom: Constants.statusBarHeight + 90,
  },
});

const ReviewList = () => {
  const { reviews, loading, handleFetchMore, refetch } = useCurrentUser({
    includeReviews: true,
    first: 8,
  });

  if (loading) return <Text>Loading Reviews...</Text>;

  const reviewNodess = reviews ? reviews.edges.map((edge) => edge.node) : [];
  const onEndReach = () => {
    // console.log("reached end of reviews fetchmore");

    handleFetchMore();
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={reviewNodess}
        renderItem={({ item }) => (
          <ReviewInfo
            review={item}
            heading="repositoryName"
            refetch={refetch}
          />
        )}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default ReviewList;
