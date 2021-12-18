import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyProfile, ICNullPhoto, ICUploadImg} from '../../assets';
import {Buttons, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapContent}>
          <View style={styles.WrapProf}>
            <View style={styles.wrapAvatar}>
              <ICNullPhoto width={110} height={110} />
              <ICUploadImg style={styles.addPhoto} />
            </View>
          </View>
          <Gap height={30} />
          <View>
            <Input judul="Nama Lengkap" />
            <Gap height={15} />
            <Input judul="Alamat" />
            <Gap height={15} />
            <Input judul="Tanggal Lahir" />
            <Gap height={15} />
            <Input judul="No. Telepon" />
            <Gap height={15} />
            <Input judul="Departemen" />
            <Gap height={15} />
            <Input judul="Divisi" />
            <Gap height={15} />
            <Input judul="Jabatan" />
            <Gap height={15} />
            <Input judul="Posisi" />
            <Gap height={15} />
            <Input judul="Email" />
            <Gap height={15} />
            <Input judul="Password" />
            <Gap height={30} />
            <Buttons title="Simpan" />
            <Gap height={50} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapContent: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  wrapAvatar: {
    height: 130,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  WrapProf: {
    alignItems: 'center',
  },
});
