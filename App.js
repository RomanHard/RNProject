import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import LoginScreen from "./login/LoginScreen";
import NewScreen from "./newScreen/newsScreen";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  };

  const onUserData = (data) => {
    setUserData(data);
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <NewScreen data={onUserData} />
      ) : (
        <LoginScreen
          onSuccessfulLogin={handleSuccessfulLogin}
          onUserData={onUserData}
        />
      )}
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
