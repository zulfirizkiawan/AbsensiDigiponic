import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICAkun,
  ICAkunAktif,
  ICBeranda,
  ICBerandaAktif,
  ICDashboard,
  ICDashboardAktif,
  ICInformasi,
  ICInformasiAktif,
  ICRiwayat,
  ICRiwayatAktif,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Beranda') {
      return active ? <ICBerandaAktif /> : <ICBeranda />;
    }
    if (title === 'Riwayat') {
      return active ? <ICRiwayatAktif /> : <ICRiwayat />;
    }
    if (title === 'Informasi') {
      return active ? <ICInformasiAktif /> : <ICInformasi />;
    }
    return <ICDashboard />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 13,
    color: active ? colors.text.MenuActive : colors.text.MenuinActive,
    fontFamily: fonts.primary[500],
    marginTop: 3,
  }),
});
