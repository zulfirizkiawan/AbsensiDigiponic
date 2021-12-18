import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardRiwayatResign, Gap, Header} from '../../components';
import {colors} from '../../utils';

const RiwayatResign = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicato={false}>
        <CardRiwayatResign />
        <CardRiwayatResign />
        <CardRiwayatResign />
        <CardRiwayatResign />
        <CardRiwayatResign />
        <CardRiwayatResign />
        <Gap height={10} />
      </ScrollView>
    </View>
  );
};

export default RiwayatResign;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
});
