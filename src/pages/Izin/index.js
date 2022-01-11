import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILJam, ILTgl, ILUploadPhoto} from '../../assets';
import {Buttons, Dropdown, Gap, JamTgl, MultiText} from '../../components';
import {colors, fonts} from '../../utils';

const Izin = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Gap height={20} />
        <Text style={styles.txt}>
          Foto Surat Dokter atau Kepentingan lainnya
        </Text>
        <TouchableOpacity>
          <View style={styles.bgUpload}>
            <ILUploadPhoto />
          </View>
        </TouchableOpacity>
        <Gap height={20} />
        <JamTgl />
        <Gap height={20} />
        <Dropdown />
        <Gap height={20} />
        <MultiText judul="Alasan Izin" />
        <Gap height={40} />
        <Buttons title="Kirim" onPress={() => alert('jaj')} />
        <Gap height={40} />
      </View>
    </ScrollView>
  );
};

export default Izin;

const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    color: colors.text.tree,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
  },
  bgUpload: {
    backgroundColor: colors.bg.primary,
    width: 150,
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
});
