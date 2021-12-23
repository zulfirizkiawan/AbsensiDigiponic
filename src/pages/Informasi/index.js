import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardInformasi, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const Informasi = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <View>
        <View style={styles.container}>
          <Text style={styles.TxtHeader}>Informasi</Text>
        </View>
        <CardInformasi onPress={() => navigation.navigate('DetailInformasi')} />
      </View>
      <Gap height={10} />
    </ScrollView>
  );
};

export default Informasi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  TxtHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#333333',
    fontFamily: fonts.primary[700],
  },
});
