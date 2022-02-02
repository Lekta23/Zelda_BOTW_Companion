import { useFonts } from "expo-font";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import Navigators from "./src/components/navigate/Navigators";

export default function App() {
  const image = { uri: "https://react-sheikah-ui.vercel.app/bg-dark.jpg" };

  const [loaded] = useFonts({
    HyliaSerifBeta: require('./assets/fonts/HyliaSerifBeta-Regular.otf'),
  });

  

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={image}
          style={styles.backgroundImage}
        >
          <Navigators />
        </ImageBackground>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'HyliaSerifBeta',
  },

  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    minHeight: "100%",
    width: "100%"
  },
});
