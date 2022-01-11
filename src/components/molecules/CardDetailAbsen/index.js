import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Gap from '../../atoms/Gap';
import {ICPin, ILUploadPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardDetailAbsen = ({JenisJam}) => {
  return (
    <View style={styles.cardPage}>
      <View style={styles.bgUpload}>
        <ILUploadPhoto />
      </View>
      <Gap width={10} />
      <View style={styles.wrapAbsen}>
        <Text style={styles.TMK}>{JenisJam}</Text>
        <Text style={styles.TGL}>08:09:44</Text>
        <Gap height={10} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TMK}>Lokasi</Text>
          <Gap width={5} />
          <ICPin />
        </View>
        <Text style={styles.Lokasi}>
          Jl. Perusahaan Raya No.34, Bodosari, Tanjungtirto, Kec. Singosari,
          Kabupaten Malang, Jawa Timur
        </Text>
      </View>
    </View>
  );
};

export default CardDetailAbsen;

const styles = StyleSheet.create({
  cardPage: {
    padding: 10,
    backgroundColor: colors.bg.secondary,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bgUpload: {
    backgroundColor: colors.white,
    width: 100,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  TGL: {
    fontFamily: fonts.primary[600],
    color: colors.text.for,
    fontSize: 14,
    marginTop: 5,
  },
  TMK: {
    fontFamily: fonts.primary[500],
    color: colors.text.five,
    fontSize: 14,
  },
  Lokasi: {
    fontFamily: fonts.primary[500],
    color: colors.text.for,
    fontSize: 14,
    marginTop: 5,
    flex: 1,
  },
  wrapAbsen: {
    flex: 1,
  },
});
