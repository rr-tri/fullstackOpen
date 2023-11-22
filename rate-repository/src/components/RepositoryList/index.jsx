import { FlatList, View, StyleSheet } from "react-native";

import { useQuery } from "@apollo/client";

import RepositoryItem from "./RepositoryItem";
import { GET_REPOSITORIES } from "../../graphql/queries";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  const repositoryNodes = data?.repositories
    ? data.repositories.edges.map((edge) => edge.node)
    : [];
  const renderItem = ({ item }) => <RepositoryItem item={item} />;
  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
