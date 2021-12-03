import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const Garis = () => {
  return <View style={styles.gg} />;
};

export default Garis;

const styles = StyleSheet.create({
  gg: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 10,
  },
});
