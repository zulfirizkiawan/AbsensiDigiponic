import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Garis, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';

const CardRiwayatCuti = () => {
  return (
    <View style={styles.Content}>
      <View style={styles.wrapStatus}>
        <Text style={styles.pengajuan}>23 Nov 2021</Text>
        <Text>Diterima</Text>
      </View>
      <Garis />
      <View style={styles.wrapTgl}>
        <View style={styles.Masuk}>
          <Text style={styles.TMK}>Tanggal Cuti</Text>
          <Text style={styles.TGL}>25 Nov 2018</Text>
        </View>
        <View style={styles.Masuk}>
          <Text style={styles.TMK}>Akhir Cuti</Text>
          <Text style={styles.TGL}>27 Nov 2021</Text>
        </View>
        <View>
          <Text style={styles.TMK}>Total Cuti</Text>
          <View style={styles.hari}>
            <Text style={styles.TGL}>3</Text>
            <Gap width={3} />
            <Text style={styles.TGL}>Hari</Text>
          </View>
        </View>
      </View>
      <View style={styles.alasan}>
        <Text style={styles.TMK}>Keterangan Cuti</Text>
        <Text style={styles.TGL}>Ngurus pernikahan</Text>
      </View>
    </View>
  );
};

export default CardRiwayatCuti;

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
  hari: {
    flexDirection: 'row',
  },
});
