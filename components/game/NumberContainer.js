import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textNumber}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignContent: "center",
    justifyContent: "center",
  },
  textNumber: {
    color: Colors.accent500,
    fontSize: 36,
    //fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
