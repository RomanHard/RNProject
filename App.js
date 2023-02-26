import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import * as Google from "expo-google-app-auth";

const GoogleLoginButton = () => {
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: "AIzaSyC8vqTH689TqEOb9x7gfGQqRowLdtl8NJ0",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log(result.user);
      } else {
        console.log("Login cancelled.");
      }
    } catch (e) {
      console.log("Login error:", e);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signInWithGoogleAsync} style={styles.button}>
        <View style={styles.logoWrapper}>
          <Text style={styles.logoText}>G</Text>
        </View>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  logoWrapper: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#4285F4",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#424242",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GoogleLoginButton;
