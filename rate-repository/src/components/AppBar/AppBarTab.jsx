import { StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "../Text";
const styles = StyleSheet.create({
  tabMenu: {
    color: "rgb(255,255,255)",
    fontSize: 20,
    paddingLeft: 10,
  },
});
const AppBarTab = ({ name, link, fn }) => {
  return (
    <Pressable onPress={fn}>
      {fn ? (
        <Text style={styles.tabMenu}> {name}</Text>
      ) : (
        <Link to={link}>
          <Text style={styles.tabMenu}> {name}</Text>
        </Link>
      )}
    </Pressable>
  );
};

export default AppBarTab;
