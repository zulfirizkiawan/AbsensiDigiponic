import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardRiwayatResign, Gap, Header} from '../../components';
import {colors, fonts, getData, showMessage, storeData} from '../../utils';

const RiwayatResign = ({navigation}) => {
  const [resign, setResign] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      console.log('profile', res);
      setUserProfile(res.idusers);
    });
  }, []);

  useEffect(() => {
    getDataResign();
  }, []);

  const getDataResign = () => {
    Axios.get(
      `http://hrm.digiponic.co.id/api/pengajuan/ListPengajuanResing?karyawan_id=${userProfile}`,
    )
      .then(res => {
        console.log('res data :', res.data);
        setResign(res.data);
      })
      .catch(err => {
        showMessage('Terjadi kesalahan di API Resign');
      });
  };
  return (
    <ScrollView showsVerticalScrollIndicato={false} style={styles.page}>
      <View>
        {resign.map(resigns => {
          return (
            <CardRiwayatResign
              key={resigns.id}
              tglKeluarKerja={resigns.tgl_resign}
              alasanKeluar={resigns.keterangan}
              tglPengajuan={resigns.tanggal_pengajuan}
            />
          );
        })}
        <Gap height={10} />
      </View>
    </ScrollView>
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
