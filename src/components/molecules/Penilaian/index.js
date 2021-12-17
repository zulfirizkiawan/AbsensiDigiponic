import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {colors, fonts} from '../../../utils';

const Penilaian = () => {
  return (
    <View style={styles.wrapPenilaian}>
      <Text style={styles.TxtSub}>Kerapian</Text>

      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.5}
      />
    </View>
  );
};

export default Penilaian;

const styles = StyleSheet.create({
  wrapPenilaian: {
    marginVertical: 5,
    borderRadius: 10,
  },
  TxtSub: {
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    fontSize: 14,
  },
  nilai: {
    marginRight: 20,
  },
  // example: {
  //   marginVertical: 24,
  // },
});
