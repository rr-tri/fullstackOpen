import { Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

const Button = ({
  style,
  f_color = "#ffff",
  f_size = theme.fontSizes.subheading,
  f_weight = theme.fontWeights.bold,
  color = "#0165d4",
  title,
  onPress,
  ...props
}) => {
  const styles = StyleSheet.create({
    button: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 20,
      paddingLeft: 20,
      borderRadius: 6,
      backgroundColor: color,
      margin: 15,
    },
    text: {
      fontWeight: f_weight,
      textTransform: "capitalize",
      fontSize: f_size,
      color: f_color,
      textAlign: "center",
    },
  });

  return (
    <Pressable onPress={onPress} style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
