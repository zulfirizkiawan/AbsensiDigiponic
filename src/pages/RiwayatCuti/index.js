import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardRiwayatCuti, Header} from '../../components';

const RiwayatCuti = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Riwayat Cuti" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicato={false}>
        <CardRiwayatCuti />
        <CardRiwayatCuti />
        <CardRiwayatCuti />
        <CardRiwayatCuti />
        <CardRiwayatCuti />
      </ScrollView>
    </View>
  );
};

export default RiwayatCuti;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
