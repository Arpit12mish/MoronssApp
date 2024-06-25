import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} /> */}
      {/* <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} /> */}
      {/* Add more buttons as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
