import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

function Details({}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>We are on details screen</Text>
    </View>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
  mainText: {
    fontSize: 40,
  },
});
