import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

function Details({navigation}: Props) {
  return (
    <View>
      <Text>We are on details screen</Text>
      {/* <Button title="Back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
