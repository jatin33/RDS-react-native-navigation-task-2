import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function FirstScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Home Screen</Text>
      <View style={styles.button}>
        <Button
          title="Go to details screen"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
  button: {
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 20,
  },
  mainText: {
    fontSize: 40,
  },
});

export default FirstScreen;
