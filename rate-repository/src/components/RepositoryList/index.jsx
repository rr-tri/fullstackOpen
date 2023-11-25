import { FlatList, View, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";

import RepositoryItem from "./RepositoryItem";
import { GET_REPOSITORIES } from "../../graphql/queries";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
export const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
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

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  return <RepositoryListContainer repositories={data?.repositories} />;
};

export default RepositoryList;
