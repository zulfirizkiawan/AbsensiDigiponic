import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Garis, Menunggu, Sukses} from '../../atoms';
import {colors, fonts} from '../../../utils';
import {ILJam, ILJamPulang, ILTgl} from '../../../assets';
import {Gap} from '../../atoms';

const CardRiawayatAbsensi = () => {
  return (
    <View style={styles.Content}>
      <View style={styles.wrapStatus}>
        <Text style={styles.pengajuan}>23 Nov 2021</Text>
        <Sukses />
      </View>
      <Garis />
      <View style={styles.wrapTgl}>
        <ILJam />
        <View style={styles.Masuk}>
          <Text style={styles.TMK}>Absen Masuk</Text>
          <Text style={styles.TGL}>08:19:44</Text>
        </View>
        <Gap width={5} />
        <ILJamPulang />
        <View>
          <Text style={styles.TMK}>Absen Pulang</Text>
          <Text style={styles.TGL}>16:19:24</Text>
        </View>
      </View>
    </View>
  );
};

export default CardRiawayatAbsensi;

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
  //   Masuk: {
  //     marginLeft: -20,
  //   },
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
