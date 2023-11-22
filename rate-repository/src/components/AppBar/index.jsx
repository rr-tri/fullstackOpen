import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import { useQuery, useApolloClient } from "@apollo/client";
import { Link } from "react-router-native";

import AppBarTab from "./AppBarTab";
import { ME } from "../../graphql/queries";
import useAuthStorage from "../../hooks/useAuthStorage";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    paddingBottom: 10,
  },
  tabMenu: {
    color: "rgb(255,255,255)",
    fontSize: 20,
    paddingLeft: 10,
  },
});

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });
  // if (loading) {
  //   return null;
  // }

  const handlePress = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name="Repositories" link="/" />
        {!data?.me ? (
          <AppBarTab name="Sign in" link="/sign-in" />
        ) : (
          <AppBarTab name="Sign out" link="/" fn={handlePress} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
