import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../../utils';
import HeaderOnly from '../../components/molecules/Header/HeaderOnly';
import Absensi from '../Absensi';
import Sakit from '../Sakit';
import RiwayatAbsensi from '../RiwayatAbsensi';

const Tab = createMaterialTopTabNavigator();

const TopNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Absensi" component={RiwayatAbsensi} />
      <Tab.Screen name="Sakit" component={Sakit} />
    </Tab.Navigator>
  );
};

const RiwayatKehadiran = () => {
  return (
    <SafeAreaProvider>
      <HeaderOnly
        type="header-only"
        title="Riwayat Kehadiran"
        onPress={() => navigation.goBack()}
      />
      <TopNav />
    </SafeAreaProvider>
  );
};

export default RiwayatKehadiran;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
