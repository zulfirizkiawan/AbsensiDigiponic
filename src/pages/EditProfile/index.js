import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ICNullPhoto, ICUploadImg} from '../../assets';
import {Buttons, Gap, Header, Input} from '../../components';
import {colors, getData} from '../../utils';

const EditProfile = ({navigation}) => {
  const [userProfile, setUserProfile] = useState('');
  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
      console.log('userProfile :', res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapContent}>
          <View style={styles.WrapProf}>
            <View style={styles.wrapAvatar}>
              <ICNullPhoto
                width={110}
                height={110}
                source={{uri: userProfile.image}}
              />

              <ICUploadImg style={styles.addPhoto} />
            </View>
          </View>
          <Gap height={30} />
          <View>
            <Input judul="Nama Lengkap" disable>
              {userProfile.nama}
            </Input>
            <Gap height={15} />
            <Input judul="Alamat">{userProfile.alamat_lengkap}</Input>
            <Gap height={15} />
            <Input judul="Tanggal Lahir" disable>
              {userProfile.tgl_lahir}
            </Input>
            <Gap height={15} />
            <Input judul="No. Telepon" keyboardType="numeric">
              {userProfile.no_telp}
            </Input>
            <Gap height={15} />
            <Input judul="Departemen" disable>
              {userProfile.nama_departmen}
            </Input>
            <Gap height={15} />
            <Input judul="Divisi" disable>
              {userProfile.nama_divisi}
            </Input>
            <Gap height={15} disable />
            <Input judul="Jabatan" disable>
              {userProfile.nama_jabatan}
            </Input>
            <Gap height={15} disable />
            <Input judul="Penempatan" disable>
              {userProfile.nama_penempatan}
            </Input>
            <Gap height={15} disable />
            <Input judul="Posisi" disable>
              {userProfile.nama_posisi}
            </Input>
            <Gap height={15} disable />
            <Input judul="Email" disable>
              {userProfile.email}
            </Input>
            <Gap height={15} />
            <Input judul="Password" secureTextEntry />
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
