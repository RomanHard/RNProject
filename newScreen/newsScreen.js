import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome, {props.data.username}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewScreen;
