import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILJam, ILTgl, ILUploadPhoto} from '../../assets';
import {Gap, MultiText} from '../../components';
import {colors, fonts} from '../../utils';

const Izin = () => {
  return (
    <View style={styles.page}>
      <Gap height={20} />
      <Text style={styles.txt}>Foto Surat Dokter atau Kepentingan lainnya</Text>
      <TouchableOpacity>
        <View style={styles.bgUpload}>
          <ILUploadPhoto />
        </View>
      </TouchableOpacity>
      <Gap height={20} />
      <View style={styles.wrapTgl}>
        <Gap width={2} />
        <View style={styles.Miring}>
          <ILTgl />
          <Gap width={10} />
          <View>
            <Text style={styles.tglJam}>Tanggal</Text>
            <Text style={styles.JamTgl}>18 Okt 2021</Text>
          </View>
        </View>
        <Gap width={10} />
        <View style={styles.Miring}>
          <ILJam />
          <Gap width={10} />
          <View>
            <Text style={styles.tglJam}>Jam</Text>
            <Text style={styles.JamTgl}>08:09:44</Text>
          </View>
        </View>
        <Gap width={2} />
      </View>

      <Gap height={20} />
      <MultiText judul="Alasan Izin" />
    </View>
  );
};

export default Izin;

const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    color: colors.text.tree,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
  },
  bgUpload: {
    backgroundColor: colors.bg.primary,
    width: 150,
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  tglJam: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.tree,
  },
  Miring: {
    flexDirection: 'row',
  },
  JamTgl: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.secondary,
  },
  wrapTgl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
