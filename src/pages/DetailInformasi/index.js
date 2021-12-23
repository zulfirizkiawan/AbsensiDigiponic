import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';

const DetailInformasi = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Detail Informasi" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View>
          <View style={styles.wrapName}>
            <Text style={styles.dari}>Dari :</Text>
            <Text style={styles.namaOrang}>Wayan Aji (HRD)</Text>
          </View>
          <Gap height={15} />
          <Text style={styles.Judul}>Informasi untuk Departemen Keuangan</Text>
          <View style={styles.wrapName}>
            <Text style={styles.clockTgl}>18 Nov 2021</Text>
            <Text style={styles.clockTgl}>-</Text>
            <Text style={styles.clockTgl}>11:22</Text>
          </View>
          <Gap height={15} />
          <Text style={styles.TxtIsi}>
            Untuk semua karyawan departemen keuangan di harapkan datang ke AULA
            pada tanggal :
          </Text>
          <Text style={styles.TxtIsi}>Hari : Kamis - 19 Nov 2021</Text>

          <Gap height={15} />
          <Text style={styles.TxtIsi}>
            Untuk informasi lengkapnya bisa anda unduh pdf pada link di bawah
            ini :
          </Text>
          <Gap height={15} />
          <TouchableOpacity>
            <Text style={styles.LinkGoogle}>
              https://drive.google.com/drive/folders/1SL0_yxo-hLOLbCPP2QLZUGiVdKIMuH_Z?usp=sharing
            </Text>
          </TouchableOpacity>
          <Gap height={15} />
          <Text style={styles.TxtIsi}>Terima Kasih.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailInformasi;

const styles = StyleSheet.create({
  wrapName: {
    flexDirection: 'row',
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 15,
  },
  dari: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.tree,
    marginRight: 20,
  },
  namaOrang: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.secondary,
    marginRight: 20,
  },
  Judul: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.secondary,
  },
  clockTgl: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.tree,
    marginRight: 10,
  },
  TxtIsi: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.secondary,
  },
  LinkGoogle: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.blueLink,
  },
});
