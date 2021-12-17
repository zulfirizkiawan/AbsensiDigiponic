import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {DummyProfil, ICSetting} from '../../assets';
import {Artikel, Gap, Layanan, Pengumuman, Penilaian} from '../../components';
import {colors, fonts} from '../../utils';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        {/* Profile */}
        <View style={styles.wrapTop}>
          <View style={styles.wrapProfile}>
            <Image source={DummyProfil} style={styles.avatar} />
            <View>
              <Text style={styles.nama}>Lutfy Uzumaki</Text>
              <Text style={styles.profesi}>Staff Quality</Text>
            </View>
          </View>
          <ICSetting />
        </View>
        <Gap height={30} />
        {/* Pengumuman */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.wrapPengumuman}>
            <Pengumuman />
            <Pengumuman />
          </View>
          <Gap width={20} />
        </ScrollView>
        {/* Layanan */}
        <Gap height={30} />
        <Text style={styles.TxtLabel}>Layanan</Text>
        <View style={{paddingHorizontal: 20}}>
          <Gap height={10} />
          <View style={styles.wrapLayanan}>
            <Layanan
              category="Absensi"
              onPress={() => navigation.navigate('Kehadiran')}
            />
            <Layanan
              category="  Cuti  "
              onPress={() => navigation.navigate('Cuti')}
            />
            <Layanan
              category=" Resign "
              onPress={() => navigation.navigate('Resign')}
            />
          </View>
        </View>
        <Gap height={30} />
        {/* Penilaian */}
        <Text style={styles.TxtLabel}>Penilaian Kinerja Anda</Text>
        <Gap height={10} />
        <View style={styles.wrapContentLayanan}>
          <Penilaian />
          <Penilaian />
          <Penilaian />
        </View>
        <Gap height={30} />
        {/* Artikel */}
        <Text style={styles.TxtLabel}>Artikel</Text>
        <Gap height={10} />
        <View style={styles.wrapContentLayanan}>
          <Artikel />
          <Artikel />
        </View>
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {
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
  wrapTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
    color: colors.text.tree,
    fontSize: 13,
  },
  TxtLabel: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  wrapLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapPengumuman: {
    flexDirection: 'row',
    height: 180,
    alignItems: 'center',
  },
  wrapContentLayanan: {
    marginHorizontal: 20,
    backgroundColor: colors.bg.secondary,
    borderRadius: 20,
    padding: 10,
  },
  wrapPenilaian: {
    shadowColor: '#858585',
    shadowOpacity: 0.26,
    shadowOffset: {width: 3, height: 2},
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
