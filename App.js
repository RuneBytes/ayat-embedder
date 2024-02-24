import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
