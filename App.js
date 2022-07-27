import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>This is A Title</Text>
      </View>
      <Text style={styles.someText}>React Native Expo</Text>
      <Button title='Tap This Button' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  someText: {
    margin: 10, borderWidth: 1, borderColor: 'blue', padding: 10
  }
});
