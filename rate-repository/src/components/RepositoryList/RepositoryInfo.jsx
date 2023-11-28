import React from "react";
import { useNavigate } from "react-router-native";
import { View, Image, StyleSheet, Linking, Pressable } from "react-native";

import { convertToK } from "../../utils/helper";
import Text from "../Text";
import Button from "../Button";

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
    paddingLeft: 65,
    marginBottom: 15,
  },
  containerB: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  container1r: {
    paddingTop: 10,
    paddingLeft: 15,
    maxWidth: "80%",
  },

  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 5,
    paddingTop: 0,
  },
  name: {
    paddingBottom: 5,
  },
  description: {
    paddingBottom: 5,
    textAlign: "justify",
  },
  language: {
    backgroundColor: "#0065e1",
    padding: 5,
    borderRadius: 5,
  },
  count: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
  countItems: {
    alignItems: "center",
  },
  withoutTopPadding: {
    paddingTop: 0,
  },
  button: {
    backgroundColor: "#0065e1",
    padding: 15,
    borderRadius: 3,
    textAlign: "center",
  },
});

const RepositoryInfo = ({ item, showButton }) => {
  // console.log(item);
  const navigate = useNavigate();

  const handlePress = () => {
    if (showButton) {
      return;
    }
    // console.log("navigated");
    navigate(`/repository/${item.id}`);
  };
  return (
    <Pressable onPress={handlePress}>
      <View testID="repositoryItem" style={styles.container}>
        <View style={styles.containerU}>
          <Image
            style={styles.userPhoto}
            source={{
              uri: item.ownerAvatarUrl,
            }}
          />

          <View style={styles.container1r}>
            <Text
              fontSize={"subheading"}
              fontWeight={"bold"}
              testID="repositoryName"
              style={styles.name}
            >
              {item.fullName}
            </Text>
            <Text
              fontSize={"body"}
              color={"textSecondary"}
              testID="repositoryDescription"
              style={styles.description}
            >
              {item.description}
            </Text>
          </View>
        </View>
        <View style={styles.containerM}>
          <Text
            color={"white"}
            fontWeight={"bold"}
            testID="repositoryLanguage"
            style={styles.language}
          >
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
        {showButton && (
          <Button
            title="Open in GitHub"
            onPress={() => Linking.openURL(item.url)}
          />
        )}
      </View>
    </Pressable>
  );
};

export default RepositoryInfo;
