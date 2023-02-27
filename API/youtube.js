// const handleAddVideo = async () => {
//   try {
//     // Запит на доступ до відео на ютуб
//     const { type, token } = await Google.logInAsync({
//       iosClientId: "your-ios-client-id",
//       androidClientId: "your-android-client-id",
//       scopes: ["https://www.googleapis.com/auth/youtube.force-ssl"],
//     });

//     if (type === "success") {
//       // Доступ було надано
//       console.log(token);
//       // Виконати запит на доступ до відео за допомогою YouTube Data API
//       // ...
//     } else {
//       // Доступ не було надано
//       console.log("Authentication failed");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
