import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Gap, Garis, Header, Sukses} from '../../components';
import {ILUploadPhoto} from '../../assets';

const DetailRiwayatIzin = ({navigation}) => {
  return (
    <View style={styles.Page}>
      <Header title="Detail Izin" onPress={() => navigation.goBack('')} />
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
          <View style={styles.miringDua}>
            <Text style={styles.statusDua}>Foto</Text>
            <View style={styles.bgUpload}>
              <ILUploadPhoto />
            </View>
          </View>
          <Gap height={20} />
          <Text style={styles.Status}>
            Dengan adanya form ini, saya bertujuan untuk izin tidak masuk kerja
            untuk waktu :
          </Text>
          <View style={styles.miringDua}>
            <Text style={styles.statusDua}>Lama Izin</Text>
            <Text style={styles.Hasil}>3 Hari</Text>
          </View>
          <Gap height={20} />
          <Text style={styles.Status}>
            Adapun alasan saya izin sebagai berikut :
          </Text>
          <Text style={styles.Status}>Saya sakit demam panas</Text>
          <Gap height={20} />
          <Text style={styles.Status}>
            Demikian permohonan izin yang saya sampaikan. Atas perhatiannya,
            saya ucapkan terima kaish.
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

export default DetailRiwayatIzin;

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
