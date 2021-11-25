import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Gap} from '..';
import {ICArrowRight, ICEmail, ICKeluar, ICPusatbantuan} from '../../../assets';
import {colors} from '../../../utils';

const TabAkun = ({category, onPress, categoryStrip}) => {
  const Icon = () => {
    if (category === 'Beri Masukan') {
      return <ICEmail />;
    }
    if (category === 'Pusat Bantuan') {
      return <ICPusatbantuan />;
    }
    if (category === 'Keluar Akun   ') {
      return <ICKeluar />;
    }
    return <ICEmail />;
  };
  const Strip = () => {
    if (categoryStrip === 'Benar') {
      return <View style={styles.stripp} />;
    } else {
    }

    return <View />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapContent}>
        <Icon />
        <Text>{category}</Text>
        <Gap width="55%" />
        <ICArrowRight />
      </View>
      <Strip />
    </TouchableOpacity>
  );
};

export default TabAkun;

const styles = StyleSheet.create({
  wrapContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stripp: {
    backgroundColor: colors.border,
    height: 0.8,
    marginVertical: 10,
  },
});
