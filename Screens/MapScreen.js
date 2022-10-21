import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";

export default function MapScreen({ route }) {
  const { location, name, place } = route.params;

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker title={name} coordinate={location} description={place} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
