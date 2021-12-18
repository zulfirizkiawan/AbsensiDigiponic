import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Menunggu = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.txtIsi}>Menunggu Persetujuan</Text>
    </View>
  );
};

export default Menunggu;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.bg.for,
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
