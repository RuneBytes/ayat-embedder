import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import styles from "./style";
import { useLayoutEffect } from "react";
const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const handleCreateNewProject = () => {
    navigation.navigate("SelectVideo");
  };
  const handlePreviousProjects = () => {
    navigation.navigate("PreviousProjects");
  };
  return (
    <>
      <View style={styles.upperContainer}>
        <Text style={styles.text}>Ayat Embedder</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          icon="plus"
          mode="contained"
          onPress={handleCreateNewProject}
          style={styles.button}
        >
          Create New Project
        </Button>

        <Button
          icon="folder"
          mode="contained"
          onPress={handlePreviousProjects}
          style={styles.button}
        >
          View Previous Projects
        </Button>
      </View>
    </>
  );
};

export default Home;
