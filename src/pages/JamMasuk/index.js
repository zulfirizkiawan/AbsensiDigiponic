import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
      <Header onPress={() => alert('wdd')} />
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>
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
