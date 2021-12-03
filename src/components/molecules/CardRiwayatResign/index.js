import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Garis, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';

const CardRiwayatResign = () => {
  return (
    <View style={styles.Content}>
      <View style={styles.wrapStatus}>
        <Text style={styles.pengajuan}>23 Nov 2021</Text>
        <Text>Ditolak</Text>
      </View>
      <Garis />
      <View style={styles.wrapTgl}>
        <View style={styles.Masuk}>
          <Text style={styles.TMK}>Tanggal Masuk Kerja</Text>
          <Text style={styles.TGL}>25 Nov 2018</Text>
        </View>
        <View>
          <Text style={styles.TMK}>Tanggal keluar Kerja</Text>
          <Text style={styles.TGL}>27 Nov 2021</Text>
        </View>
      </View>
      <View style={styles.alasan}>
        <Text style={styles.TMK}>Alasan keluar</Text>
        <Text style={styles.TGL}>Pindah rumah diluar kota </Text>
      </View>
    </View>
  );
};

export default CardRiwayatResign;

const styles = StyleSheet.create({
  wrapStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Content: {
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 10,
  },
  wrapTgl: {
    flexDirection: 'row',
  },
  Masuk: {
    marginRight: 30,
  },
  TMK: {
    fontFamily: fonts.primary[500],
    color: colors.black,
    fontSize: 14,
  },
  TGL: {
    marginTop: 5,
    fontFamily: fonts.primary[500],
    color: colors.primary,
    fontSize: 14,
  },
  alasan: {
    marginTop: 15,
  },
  pengajuan: {
    fontFamily: fonts.primary[500],
    color: colors.black,
    fontSize: 14,
  },
});
