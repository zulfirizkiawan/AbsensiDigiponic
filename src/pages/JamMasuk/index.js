import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Buttons,
  Gap,
  Header,
  Input,
  JamTgl,
  UploadGambar,
} from '../../components';

const JamMasuk = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} />
      <Gap height={20} />
      <View style={styles.content}>
        <View>
          <UploadGambar style={styles.UG} />
          <Gap height={30} />
          <JamTgl />
          <Gap height={20} />
          <Input judul="Lokasi" />
        </View>
      </View>
      <View>
        <Buttons title="Absen Masuk" />
      </View>
    </View>
  );
};

export default JamMasuk;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
});
