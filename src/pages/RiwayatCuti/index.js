import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardRiwayatCuti, Header} from '../../components';
import {colors} from '../../utils';

const RiwayatCuti = ({navigation}) => {
  return (
    <View style={styles.page}>
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
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
});
