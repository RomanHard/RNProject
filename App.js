import React from "react";
import { View, StyleSheet } from "react-native";
import LoginScreen from "./login/LoginScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default App;
