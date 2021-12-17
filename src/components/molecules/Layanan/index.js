import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILAbsensi, ILCuti, ILKehadiran, ILResign} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Layanan = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'Absensi') {
      return <ILAbsensi />;
    }
    if (category === '  Cuti  ') {
      return <ILCuti />;
    }
    if (category === ' Resign ') {
      return <ILResign />;
    }
    return <ILAbsensi />;
  };
  return (
    <TouchableOpacity style={styles.wrapLayanan} onPress={onPress}>
      <Icon />
      <Text style={styles.lblLayanan}>{category}</Text>
    </TouchableOpacity>
  );
};

export default Layanan;

const styles = StyleSheet.create({
  wrapLayanan: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg.secondary,
    // paddingVertical: 15,
    // paddingHorizontal: 20,
    height: 100,
    width: 100,
    borderRadius: 15,
  },
  lblLayanan: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginTop: 10,
  },
});
