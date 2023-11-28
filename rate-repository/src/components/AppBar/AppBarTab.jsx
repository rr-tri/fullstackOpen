import { StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "../Text";
const styles = StyleSheet.create({
  tabMenu: {
    padding: 10,
  },
});
const AppBarTab = ({ name, link, fn }) => {
  return (
    <Pressable onPress={fn}>
      {fn ? (
        <Text
          fontSize="subheading"
          fontWeight="bold"
          color="white"
          style={styles.tabMenu}
        >
          {" "}
          {name}
        </Text>
      ) : (
        <Link to={link}>
          <Text
            fontSize="subheading"
            fontWeight="bold"
            color="white"
            style={styles.tabMenu}
          >
            {" "}
            {name}
          </Text>
        </Link>
      )}
    </Pressable>
  );
};

export default AppBarTab;
