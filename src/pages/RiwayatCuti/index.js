import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardRiwayatCuti, Gap, Header} from '../../components';
import {colors, fonts, getData, showMessage, storeData} from '../../utils';

const RiwayatCuti = ({navigation}) => {
  const [cuti, setCuti] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      console.log('profile', res);
      setUserProfile(res.idusers);
    });
    // getDataCuti();
  }, []);

  useEffect(() => {
    getDataCuti();
  }, []);

  const getDataCuti = () => {
    Axios.get(
      `http://hrm.digiponic.co.id/api/pengajuan/AmbilDataCuti?karyawan_id=${userProfile}`,
    )
      .then(res => {
        console.log('res data :', res);
        setCuti(res.data);
      })
      .catch(err => {
        showMessage('Terjadi kesalahan di API Cuti');
      });
  };
  return (
    <ScrollView showsVerticalScrollIndicato={false} style={styles.page}>
      <View>
        {cuti.map(cuties => {
          return (
            <CardRiwayatCuti
              key={cuties.id}
              tglMulaiCuti={cuties.tgl_mulai}
              tglAkhirCuti={cuties.tgl_selesai}
              alasanCuti={cuties.keterangan}
            />
          );
        })}
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
