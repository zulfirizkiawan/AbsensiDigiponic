import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyBantuan, Workshop} from '../../../assets';

const Pengumuman = () => {
  return <Image source={Workshop} style={styles.ImgPeng} />;
};

export default Pengumuman;

const styles = StyleSheet.create({
  ImgPeng: {
    borderRadius: 20,
    marginLeft: 20,
    height: 170,
    width: 320,
  },
});
