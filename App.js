import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

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
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalItemText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
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
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "lightgreen",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
  },

  goalItemText: {
    color: "black",
    fontSize: 16,
  },
});
