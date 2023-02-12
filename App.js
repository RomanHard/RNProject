import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteeredGoalText, setEteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalIntupHandler(enteredText) {
    setEteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoal) => [...courseGoals, enteeredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputConrainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalIntupHandler}
        />
        <Button title="Add Goal!" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        [courseGoals.map((goal) => <Text>{goal}</Text>)]
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputConrainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },

  textInput: {
    width: "70%",
    borderColor: "lightgrey",
    borderWidth: 1,
    padding: 10,
  },
  goalsContainer: {
    flex: 5,
  },
});
