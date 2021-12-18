import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Ditolak = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.txtIsi}>Di Tolak</Text>
    </View>
  );
};

export default Ditolak;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.bg.tree,
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
