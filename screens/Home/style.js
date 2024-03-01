import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  upperContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  buttonsContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#00001f",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 30,
    width: "80%",
    backgroundColor: "teal",
  },
});

export default styles;
