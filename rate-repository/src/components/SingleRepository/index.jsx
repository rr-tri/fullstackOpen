import { FlatList, View, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import Constants from "expo-constants";

import Text from "../Text";
import RepositoryInfo from "../RepositoryList/RepositoryInfo";
import ReviewInfo from "./ReviewInfo";
import useRepository from "../../hooks/useRepository";

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: Constants.statusBarHeight + 90,
  },
  separator: {
    height: 10,
  },
  header: {
    marginBottom: 15,
  },
  reviewInfo: {
    paddingBottom: 15,
  },
});

const SingleRepository = () => {
  const id = useParams().id;
  const { loading, repository, reviews, handleFetchMore } = useRepository({
    id,
    first: 4,
  });

  if (loading) return <Text>Loading...</Text>;

  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];
  const handleEndReached = () => {
    handleFetchMore();
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => (
          <ReviewInfo style={styles.reviewInfo} review={item} heading="user" />
        )}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => (
          <RepositoryInfo item={repository} showButton={true} />
        )}
        ListHeaderComponentStyle={styles.header}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onEndReachedThreshold={0.5}
        onEndReached={handleEndReached}
      />
    </View>
  );
};

export default SingleRepository;
