import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components';
import {CardRiwayatIzin} from '../../components/molecules';
import {colors} from '../../utils';

const RiwayatIzin = () => {
  return (
    <ScrollView showsVerticalScrollIndicato={false} style={styles.page}>
      <View>
        <CardRiwayatIzin />
        <CardRiwayatIzin />
        <CardRiwayatIzin />
        <CardRiwayatIzin />
        <CardRiwayatIzin />
        <Gap height={10} />
      </View>
    </ScrollView>
  );
};

export default RiwayatIzin;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
});
