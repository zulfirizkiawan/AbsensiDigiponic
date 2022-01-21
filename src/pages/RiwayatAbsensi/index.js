import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';
import {CardRiwayatAbsensi, CardRiwayatCuti, Gap} from '../../components';

const RiwayatAbsensi = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicato={false} style={styles.page}>
      <View>
        <CardRiwayatAbsensi
          onPress={() => navigation.navigate('DetailRiwayatAbsensi')}
        />
        <CardRiwayatAbsensi />
        <CardRiwayatAbsensi />
        <CardRiwayatAbsensi />
        <CardRiwayatAbsensi />
        <CardRiwayatAbsensi />
        <CardRiwayatAbsensi />
        <CardRiwayatAbsensi />
        <Gap height={10} />
      </View>
    </ScrollView>
  );
};

export default RiwayatAbsensi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
});
