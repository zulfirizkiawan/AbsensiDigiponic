import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/colors';
import {Gap} from '../../atoms';

const CardInformasi = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapContent} onPress={onPress}>
      <View style={styles.nameClock}>
        <Text style={styles.name}>Wayan Aji (HRD)</Text>
        <Text style={styles.clock}>11:22</Text>
      </View>
      <Text style={styles.infor}>Informasi untuk Departemen Keuangan</Text>
      <Gap height={15} />
      <Text style={styles.clock}>18 Nov 2021</Text>
    </TouchableOpacity>
  );
};

export default CardInformasi;

const styles = StyleSheet.create({
  nameClock: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapContent: {
    backgroundColor: colors.bg.secondary,
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  name: {
    fontSize: 14,
    color: colors.secondary,
    fontFamily: fonts.primary[600],
  },
  clock: {
    fontSize: 12,
    color: colors.text.tree,
    fontFamily: fonts.primary[400],
  },
  infor: {
    fontSize: 14,
    color: colors.secondary,
    fontFamily: fonts.primary[500],
  },
});
