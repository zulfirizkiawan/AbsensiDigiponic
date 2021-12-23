import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Garis, Menunggu, Sukses} from '../../atoms';
import {colors, fonts} from '../../../utils';
import {ILJam, ILTgl} from '../../../assets';
import {Gap} from '../../atoms';

const CardRiwayatIzin = () => {
  return (
    <View style={styles.Content}>
      <View style={styles.wrapStatus}>
        <Text style={styles.pengajuan}>23 Nov 2021</Text>
        <Sukses />
      </View>
      <Garis />
      <View style={styles.wrapTgl}>
        <ILJam />
        <View>
          <Text style={styles.TMK}>Jam Izin</Text>
          <Text style={styles.TGL}>08:19:44</Text>
        </View>
        <Gap width={30} />
        <View>
          <Text style={styles.TMK}>Lama Izin</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.TGL}>3</Text>
            <Text style={styles.TGL}> Hari</Text>
          </View>
        </View>
        <Gap width={50} />
      </View>
    </View>
  );
};

export default CardRiwayatIzin;

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
  // Masuk: {
  //   marginLeft: -50,
  // },
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
