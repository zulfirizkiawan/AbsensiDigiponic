import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Gap, Garis, Header, Sukses} from '../../components';
import {ILUploadPhoto} from '../../assets';

const DetailRiwayatResign = ({navigation}) => {
  return (
    <View style={styles.Page}>
      <Header title="Detail Resign" onPress={() => navigation.goBack('')} />
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
          <Gap height={5} />
          <View style={styles.Miring}>
            <Text style={styles.Status}>Jam Pengajuan</Text>
            <Text style={styles.Hasil}>08:09:44</Text>
          </View>
          <Garis />
          <Text style={styles.Status}>Kepada Yth.</Text>
          <Gap height={5} />
          <Text style={styles.Hasil}>
            Ariel Noah (Kepala Departemen Produksi)
          </Text>
          <Text style={styles.Hasil}>PT. Maju Bersama</Text>
          <Text style={styles.Hasil}>Malang</Text>
          <Gap height={20} />
          <Text style={styles.Status}>
            Melalui form ini, Saya yang bertanda tangan di bawah ini :
          </Text>
          <View style={styles.miringDua}>
            <Text style={styles.statusDua}>Nama</Text>
            <Text style={styles.Hasil}>Lutfy Uzumaki</Text>
          </View>
          <View style={styles.miringDua}>
            <Text style={styles.statusDua}>Departemen</Text>
            <Text style={styles.Hasil}>Produksi</Text>
          </View>
          <View style={styles.miringDua}>
            <Text style={styles.statusDua}>Jabatan</Text>
            <Text style={styles.Hasil}>Staff</Text>
          </View>
          <View style={styles.miringDua}>
            <Text style={styles.statusDua}>Posisi</Text>
            <Text style={styles.Hasil}>Staff Quality</Text>
          </View>
          <Gap height={20} />
          <Text style={styles.Status}>
            Dengan adanya form ini, saya bertujuan untuk mengundurankan diri
            sebagai karyawan terhitung pada tanggal :
          </Text>
          <View style={styles.miringDua}>
            <Text style={styles.statusDua}>Masuk kerja</Text>
            <Text style={styles.Hasil}>20 Okt 2018</Text>
          </View>
          <View style={styles.miringDua}>
            <Text style={styles.statusDua}>Keluar kerja</Text>
            <Text style={styles.Hasil}>23 Okt 2021</Text>
          </View>
          <Gap height={10} />
          <Text style={styles.Status}>
            Adapun alasan pengunduran ini sebagai berikut :
          </Text>
          <Text style={styles.Status}>
            Saya akan nikah dan akan pindah ke rumah istri saya yang berada di
            riau.
          </Text>
          <Gap height={20} />
          <Text style={styles.Status}>
            Demikian form pengunduran ini saya sampaikan dengan
            sebenar-benarnya, tanpa ada desakan dari pihak manapun. Atas
            perhatiannya, saya ucapkan terima kaish.
          </Text>
          <Gap height={20} />
          <View style={styles.wrapTtd}>
            <View style={styles.wrapTtdDua}>
              <Text style={styles.Status}>Hormat saya,</Text>
              <View style={styles.bgUploadDua}>
                <ILUploadPhoto />
              </View>
              <Text style={styles.Status}>(Lutfy Uzumkai)</Text>
            </View>
          </View>
        </View>
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default DetailRiwayatResign;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  Miring: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  miringDua: {
    flexDirection: 'row',
    marginTop: 10,
  },
  Status: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    textAlign: 'justify',
  },
  statusDua: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    width: 100,
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
  bgUpload: {
    backgroundColor: colors.bg.primary,
    width: 160,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bgUploadDua: {
    backgroundColor: colors.bg.primary,
    width: 130,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  wrapTtd: {
    alignItems: 'flex-end',
  },
  wrapTtdDua: {
    alignItems: 'center',
  },
});
