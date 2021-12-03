import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardRiwayatResign, Gap, Header} from '../../components';
import {colors} from '../../utils';

const RiwayatResign = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Riwayat Resign" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicato={false}>
        <CardRiwayatResign />
        <CardRiwayatResign />
        <CardRiwayatResign />
        <CardRiwayatResign />
        <CardRiwayatResign />
        <CardRiwayatResign />
      </ScrollView>
    </View>
  );
};

export default RiwayatResign;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
