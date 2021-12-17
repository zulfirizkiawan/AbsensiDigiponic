import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../../utils';
import HeaderOnly from '../../components/molecules/Header/HeaderOnly';
import Absensi from '../Absensi';
import Sakit from '../Sakit';

const Tab = createMaterialTopTabNavigator();

const TopNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Absensi" component={Absensi} />
      <Tab.Screen name="Sakit" component={Sakit} />
    </Tab.Navigator>
  );
};

const Kehadiran = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <HeaderOnly
        type="header-only"
        title="Kehadiran"
        onPress={() => navigation.goBack()}
      />
      <TopNav />
    </SafeAreaProvider>
  );
};

export default Kehadiran;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
