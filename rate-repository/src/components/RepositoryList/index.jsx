import React, { useState, useCallback } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";

import useRepositories from "../../hooks/useRepositories";
import RepositoryListHeader from "./RepositoryListHeader";
import { useDebounce } from "use-debounce";
import RepositoryInfo from "./RepositoryInfo";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    margin: 5,
    marginBottom: Constants.statusBarHeight + 90,
  },
});
export const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  setOrderBy,
  setOrderDirection,
  searchQuery,
  setSearchQuery,
  onEndReach,
}) => {
  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  // console.log(repositoriesNodes[0]);
  return (
    <View style={styles.container}>
      <FlatList
        data={repositoriesNodes}
        renderItem={({ item }) => (
          <RepositoryInfo item={item} showButton={false} />
        )}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <RepositoryListHeader
            setOrderBy={setOrderBy}
            setOrderDirection={setOrderDirection}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        }
      />
    </View>
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");
  const [searchQuery, setSearchQuery] = useState("");
  const [value] = useDebounce(
    searchQuery,
    500 // Debounce time in milliseconds
  );

  const { repositories, loading, handleFetchMore } = useRepositories({
    first: 7,
    orderBy,
    orderDirection,
    searchQuery: value,
    after: "",
  });

  const onEndReach = () => {
    handleFetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      setOrderBy={setOrderBy}
      setOrderDirection={setOrderDirection}
      onEndReach={onEndReach}
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
    />
  );
};

export default RepositoryList;
