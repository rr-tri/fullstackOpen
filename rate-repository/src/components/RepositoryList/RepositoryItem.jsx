import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "../Text";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#ffff",
    padding: 15,
  },
  containerU: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerM: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 60,
    marginBottom: 15,
  },
  containerB: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  container1r: {
    paddingLeft: 20,
  },

  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 5,
    paddingTop: 0,
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
    paddingBottom: 5,
  },
  description: {
    fontSize: 15,
    color: "#5f6265",
    paddingBottom: 5,
  },
  language: {
    backgroundColor: "#0065e1",
    color: "#ffff",
    fontSize: 15,
    padding: 5,
    borderRadius: 5,
  },
  count: {
    fontWeight: 700,
    paddingBottom: 5,
  },
  countItems: {
    alignItems: "center",
  },
});
export const convertToK = (value) => {
  if (value >= 1000) {
    const result = value / 1000;
    return result.toFixed(1) + "k";
  }
  return value;
};
const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.containerU}>
        <Image
          style={styles.userPhoto}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />

        <View style={styles.container1r}>
          <Text testID="repositoryName" style={styles.name}>
            {item.fullName}
          </Text>
          <Text testID="repositoryDescription" style={styles.description}>
            {item.description}
          </Text>
        </View>
      </View>
      <View style={styles.containerM}>
        <Text testID="repositoryLanguage" style={styles.language}>
          {item.language}
        </Text>
      </View>
      <View style={styles.containerB}>
        <View style={styles.countItems}>
          <Text testID="repositoryStarGazers" style={styles.count}>
            {convertToK(item.stargazersCount)}
          </Text>
          <Text style={styles.description}>Stars</Text>
        </View>
        <View style={styles.countItems}>
          <Text testID="repositoryForksCount" style={styles.count}>
            {convertToK(item.forksCount)}
          </Text>
          <Text style={styles.description}>Forks</Text>
        </View>
        <View style={styles.countItems}>
          <Text testID="repositoryReviewCount" style={styles.count}>
            {convertToK(item.reviewCount)}
          </Text>
          <Text style={styles.description}>Reviews</Text>
        </View>
        <View style={styles.countItems}>
          <Text testID="repositoryRatingAverage" style={styles.count}>
            {convertToK(item.ratingAverage)}
          </Text>
          <Text style={styles.description}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
