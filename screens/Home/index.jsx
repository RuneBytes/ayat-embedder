import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import styles from "./style";
const Home = () => {
  return (
    <>
      <View style={styles.upperContainer}>
        <Text style={styles.text}>Ayat Embedder</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          icon="plus"
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.button}
        >
          Create New Project
        </Button>

        <Button
          icon="folder"
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.button}
        >
          View Previous Projects
        </Button>
      </View>
    </>
  );
};

export default Home;
