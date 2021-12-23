import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Sukses = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.txtIsi}>Sukses</Text>
    </View>
  );
};

export default Sukses;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 15,
  },
  txtIsi: {
    color: colors.white,
    fontFamily: fonts.primary[500],
    fontSize: 12,
  },
});
