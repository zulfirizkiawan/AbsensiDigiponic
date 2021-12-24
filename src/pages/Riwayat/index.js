import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../utils';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RiwayatIzin from '../RiwayatIzin';
import RiwayatAbsensi from '../RiwayatAbsensi';
import RiwayatResign from '../RiwayatResign';
import RiwayatCuti from '../RiwayatCuti';

const Tab = createMaterialTopTabNavigator();

const TopNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Absensi" component={RiwayatAbsensi} />
      <Tab.Screen name="Izin" component={RiwayatIzin} />
      <Tab.Screen name="Cuti" component={RiwayatCuti} />
      <Tab.Screen name="Resign" component={RiwayatResign} />
    </Tab.Navigator>
  );
};

const Riwayat = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.TxtHeader}>Riwayat</Text>
      </View>
      <TopNav />
    </SafeAreaProvider>
  );
};

export default Riwayat;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  TxtHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#333333',
    fontFamily: fonts.primary[700],
  },
});
