import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";

export function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker
          title="I am here"
          coordinate={{ latitude: 47.65471, longitude: 34.10867 }}
          description="Hello"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
