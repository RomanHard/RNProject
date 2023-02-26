import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoal) => [
      ...courseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputConrainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal!" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            itemData.index;
            return (
              <View key={goal} style={styles.goalItem}>
                <Text style={styles.goalItemText}>{itemData.item}</Text>
              </View>
            );
          }}
          alwaysBounceVertical={false}
        />
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
