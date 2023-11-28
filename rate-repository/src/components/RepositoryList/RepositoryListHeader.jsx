import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useDebounce } from "use-debounce";

import Button from "../Button";

const styles = StyleSheet.create({
  searchBar: {
    margin: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#ffff",
  },

  pickerContainer: {
    height: "auto",
    margin: 20,
    marginTop: 10,
  },
  picker: {
    borderWidth: 0,
    borderColor: "#fff",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    marginRight: 20,
    backgroundColor: "#e1e4e8",
  },
});

const RepositoryListHeader = ({
  setOrderBy,
  setOrderDirection,
  searchQuery,
  setSearchQuery,
}) => {
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  const [filter, setFilter] = useState("CREATED_AT,DESC");
  const filterOptions = [
    { title: "Latest repositories", value: "CREATED_AT,DESC" },
    { title: "Highest rated repositories", value: "RATING_AVERAGE,DESC" },
    { title: "Lowest rated repositories", value: "RATING_AVERAGE,ASC" },
  ];

  return (
    <View>
      {/* // TODO Debug searchBar functionality */}
      {/* //? As you type in Searchbar it should fetch result from server and shows the result(s) 
          //? currently only orderBy and orderDirection filter is working
      */}

      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={filter}
          onValueChange={(itemValue, itemIndex) => {
            if (itemValue) {
              setOrderBy(itemValue.split(",")[0]);
              setOrderDirection(itemValue.split(",")[1]);
              setFilter(itemValue);
            }
          }}
        >
          {filterOptions.map((option, i) => (
            <Picker.Item key={i} label={option.title} value={option.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default RepositoryListHeader;
