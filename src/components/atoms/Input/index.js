import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({judul}) => {
  return (
    <View>
      <Text style={styles.Tjudul}>{judul}</Text>
      <TextInput style={styles.TI}></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Tjudul: {
    color: colors.text.secondary,
    fontSize: 14,
    fontFamily: fonts.primary[500],
  },
  TI: {
    marginTop: 10,
    fontSize: 16,
    color: '#070821',
    backgroundColor: colors.bg.primary,
    fontFamily: fonts.primary[400],
    borderRadius: 15,
    paddingLeft: 10,
  },
});
