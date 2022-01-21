import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ICPin, ILTgl, ILUploadPhoto} from '../../assets';
import {CardDetailAbsen, Gap, Garis, Header, Sukses} from '../../components';
import {colors, fonts} from '../../utils';

const DetailRiwayatAbsensi = ({navigation}) => {
  return (
    <View style={styles.Page}>
      <Header title="Detail Absensi" onPress={() => navigation.goBack('')} />
      <ScrollView>
        <View style={styles.Content}>
          <View style={styles.Miring}>
            <Text style={styles.Status}>Status</Text>
            <Sukses />
          </View>
          <Garis />
          <View style={styles.Miring}>
            <Text style={styles.Status}>Tanggal Pengajuan</Text>
            <Text style={styles.Hasil}>18 Okt 2021</Text>
          </View>
          <Garis />
          <Gap height={10} />
          <CardDetailAbsen JenisJam="Jam Absen Masuk" />
          <Gap height={20} />
          <CardDetailAbsen JenisJam="Jam Absen Pulang" />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailRiwayatAbsensi;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  Miring: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Status: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  Hasil: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  Content: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
