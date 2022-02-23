import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Garis, Ditolak} from '../../atoms';
import {colors, fonts} from '../../../utils';
import {ILTgl} from '../../../assets';

const CardRiwayatResign = ({
  onPress,
  tglKeluarKerja,
  alasanKeluar,
  tglPengajuan,
}) => {
  return (
    <TouchableOpacity style={styles.Content} onPress={onPress}>
      <View style={styles.wrapStatus}>
        <Text style={styles.pengajuan}>{tglPengajuan}</Text>
        <Ditolak />
      </View>
      <Garis />
      <View style={styles.wrapTgl}>
        {/* <ILTgl /> */}
        <View style={styles.Masuk}>
          <Text style={styles.TMK}>Tgl keluar Kerja</Text>
          <Text style={styles.TGL}>{tglKeluarKerja}</Text>
        </View>
      </View>
      <View style={styles.alasan}>
        <Text style={styles.TMK}>Alasan keluar</Text>
        <Text style={styles.TGL}>{alasanKeluar}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardRiwayatResign;

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
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  Masuk: {
    // marginLeft: 20,
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
