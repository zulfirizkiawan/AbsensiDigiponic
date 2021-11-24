import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyBantuan} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Pengumuman = () => {
  return (
    <View style={styles.wrapPeng}>
      <View style={styles.wrapContent}>
        <Text style={styles.JdlPeng}>Bantuan Sosial</Text>
        <Text style={styles.KetPeng}>
          PT. Maju Bersama akan mengadakan bantuan sembako kepada seluruh
          pekerja di PT. Maju Bersama dan masyarakat yang kurang mampu di daerah
          malang.
        </Text>
        <View style={styles.wrapJam}>
          <Text style={styles.jamTgl}>26 Nov 2021</Text>
          <Text style={styles.jamTgl}>-</Text>
          <Text style={styles.Tgl}>Jam 10:00 - Selesai</Text>
        </View>
      </View>
      <Image source={DummyBantuan} style={styles.ImgPeng} />
    </View>
  );
};

export default Pengumuman;

const styles = StyleSheet.create({
  wrapPeng: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: '#000000',
    elevation: 4,
    flexDirection: 'row',
  },
  ImgPeng: {
    width: 147,
    height: '100%',
    borderRadius: 5,
  },
  JdlPeng: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  wrapContent: {
    marginRight: 10,
    flex: 1,
  },
  KetPeng: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginTop: 4,
  },
  wrapJam: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  jamTgl: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  Tgl: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
    marginRight: 20,
  },
});
