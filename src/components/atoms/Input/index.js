import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({judul}) => {
  return (
    <View>
      <Text style={styles.Tjudul}>{judul}</Text>
      <TextInput style={styles.TI} />
      <View style={styles.garis} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Tjudul: {
    color: '#858585',
    fontSize: 14,
    fontWeight: '500',
  },
  TI: {
    marginTop: -8,
    fontSize: 16,
    color: '#070821',
    fontWeight: '400',
  },
  garis: {
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
    marginTop: -5,
  },
});
