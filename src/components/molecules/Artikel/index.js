import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyBantuan} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Artikel = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={DummyBantuan} style={styles.img} />
        <View style={styles.Wrapper}>
          <Text style={styles.title}>
            Perjalanan PT MAJU BERSAMA dari Modal Rp 80 Ribu hingga Jadi
            Perusahaan Publik terbesar di jawa
          </Text>
          <Text style={styles.date}>26 jan 2021</Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: colors.border,
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default Artikel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 13,
    fontFamily: fonts.primary[500],
    color: colors.text.for,
    width: '100%',
  },
  date: {
    fontSize: 10,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2,
  },

  img: {
    width: 98,
    height: 80,
    borderRadius: 5,
    marginRight: 12,
  },
  Wrapper: {
    flex: 1,
  },
});
