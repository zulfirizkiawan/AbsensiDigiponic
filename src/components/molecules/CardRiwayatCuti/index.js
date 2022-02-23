import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Garis, Menunggu} from '../../atoms';
import {colors, fonts} from '../../../utils';
import {ILTgl} from '../../../assets';

const CardRiwayatCuti = ({onPress, tglMulaiCuti, tglAkhirCuti, alasanCuti}) => {
  return (
    <TouchableOpacity style={styles.Content} onPress={onPress}>
      <View style={styles.wrapStatus}>
        <Text style={styles.pengajuan}>23 Nov 2021</Text>
        <Menunggu />
      </View>
      <Garis />
      <View style={styles.wrapTgl}>
        <ILTgl />
        <View style={styles.Masuk}>
          <Text style={styles.TMK}>Tgl Mulai Cuti</Text>
          <Text style={styles.TGL}>{tglMulaiCuti}</Text>
        </View>
        <View>
          <Text style={styles.TMK}>Tgl Akhir Cuti</Text>
          <Text style={styles.TGL}>{tglAkhirCuti}</Text>
        </View>
      </View>
      <View style={styles.alasan}>
        <Text style={styles.TMK}>Alasan Cuti</Text>
        <Text style={styles.TGL}>{alasanCuti}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardRiwayatCuti;

const styles = StyleSheet.create({
  wrapStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Content: {
    backgroundColor: colors.bg.secondary,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 15,
  },
  wrapTgl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Masuk: {
    marginLeft: -50,
  },
  TMK: {
    fontFamily: fonts.primary[500],
    color: colors.text.five,
    fontSize: 14,
  },
  TGL: {
    marginTop: 5,
    fontFamily: fonts.primary[600],
    color: colors.text.for,
    fontSize: 14,
  },
  alasan: {
    marginTop: 15,
  },
  pengajuan: {
    fontFamily: fonts.primary[500],
    color: colors.text.secondary,
    fontSize: 14,
  },
});
