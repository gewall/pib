import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";

const ArtikelView = ({ navigation, route }) => {
  const { url } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  );
};

export default ArtikelView;
