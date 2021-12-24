import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const MultiText = ({judul}) => {
  return (
    <View>
      <Text style={styles.Tjudul}>{judul}</Text>
      <TextInput style={styles.TI} multiline={true}></TextInput>
    </View>
  );
};

export default MultiText;

const styles = StyleSheet.create({
  Tjudul: {
    color: colors.text.secondary,
    fontSize: 14,
    fontFamily: fonts.primary[500],
  },
  TI: {
    height: 120,
    marginTop: 10,
    fontSize: 16,
    color: '#070821',
    backgroundColor: colors.bg.primary,
    fontFamily: fonts.primary[400],
    borderRadius: 15,
    paddingLeft: 10,
    textAlignVertical: 'top',
  },
});
