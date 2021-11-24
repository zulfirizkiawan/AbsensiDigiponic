import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {DummyProfil} from '../../assets';
import {Gap, Layanan, Pengumuman} from '../../components';
import {colors, fonts} from '../../utils';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Gap height={40} />
      <View style={styles.wrapProfile}>
        <Image source={DummyProfil} style={styles.avatar} />
        <View>
          <Text style={styles.nama}>Lutfy Uzumaki</Text>
          <Text style={styles.profesi}>Staff Quality</Text>
        </View>
      </View>
      <Gap height={40} />
      <Pengumuman />
      <Gap height={40} />
      <Text style={styles.TxtLabel}>Layanan</Text>
      <Gap height={20} />
      <View style={styles.wrapLayanan}>
        <Layanan category="Kehadiran" onPress={() => alert('Hallo')} />
        <Layanan category="Cuti" onPress={() => alert('Hallo')} />
        <Layanan category="  Resign  " onPress={() => alert('Hallo')} />
      </View>
      <Gap height={40} />
      <Text style={styles.TxtLabel}>Penilaian Kinerja</Text>
      <Gap height={15} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    flex: 1,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 16,
  },
  wrapProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nama: {
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    fontSize: 18,
    letterSpacing: 0.8,
  },
  profesi: {
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    fontSize: 12,
  },
  TxtLabel: {
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    fontSize: 14,
  },
  wrapLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});
