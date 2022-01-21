import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardRiwayatCuti, Gap, Header} from '../../components';
import {colors} from '../../utils';

const RiwayatCuti = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicato={false} style={styles.page}>
      <View>
        <CardRiwayatCuti
          onPress={() => navigation.navigate('DetailRiwayatCuti')}
        />
        <CardRiwayatCuti />
        <CardRiwayatCuti />
        <CardRiwayatCuti />
        <CardRiwayatCuti />
        <Gap height={10} />
      </View>
    </ScrollView>
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
