import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ICPin} from '../../assets';
import {Buttons, Gap, Garis} from '../../components';
import {
  colors,
  fonts,
  getData,
  showMessage,
  storeData,
  useForm,
} from '../../utils';
import MapView, {Marker} from 'react-native-maps';
import moment from 'moment';
import Axios from 'axios';
import {setLoading} from '../../redux/action';
import {useDispatch} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';

const Absensi = ({navigation}) => {
  //ambil data jam dan tanggal
  const [tanggal, setCurrentDate] = useState('');
  const [jam_masuk, setCurrentTime] = useState('');

  useEffect(() => {
    var time = moment().utcOffset('+07:00').format('HH:mm:ss');
    var date = moment().utcOffset('+07:00').format('DD MMM YYYY');
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(date);
    setCurrentTime(time);
  }, []);

  //post data absen
  const dispatch = useDispatch();

  const onSubmit = () => {
    const data = {
      tanggal,
      jam_masuk,
    };
    console.log('data send :', data);
    dispatch(setLoading(true));
    Axios.post(`http://hrm.digiponic.co.id/api/karyawan/CheckIn`, data)
      .then(res => {
        console.log('res :', res);

        const token = `${res.user_id}`;
        dispatch(setLoading(false));
        storeData('token', token);
        showMessage('Berhasil absensi', 'success');
        navigation.reset({index: 0, routes: [{name: 'RiwayatAbsensi'}]});
      })
      .catch(err => {
        dispatch(setLoading(false));
        showMessage('ada kesalahan dalam sistem');
      });
  };

  //ambil lokasi

  return (
    <ScrollView>
      <View style={styles.page}>
        <Gap height={15} />
        <View style={styles.wrapAbsensiLokasi}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -7.9124451,
              longitude: 112.6408022,
              latitudeDelta: 0.0009,
              longitudeDelta: 0.0009,
            }}>
            <Marker
              coordinate={{
                latitude: -7.912431159618501,
                longitude: 112.64157513281744,
              }}
            />
          </MapView>
          <Gap height={10} />
          <View style={styles.contentLokasi}>
            <View style={styles.wrapLokasis}>
              <Text style={styles.txtTgl}>{tanggal}</Text>
              <Text style={styles.txtjam}>{jam_masuk}</Text>
            </View>
            <Gap height={15} />
            <View style={styles.wrapLokasi}>
              <ICPin />
              <Text style={styles.addresLokasi}>
                Jl. Perusahaan Raya No.34, Bodosari, Tanjungtirto, Kec.
                Singosari, Kabupaten Malang, Jawa Timur 65153
              </Text>
            </View>
            <Gap height={10} />
            <Garis />
            <Gap height={10} />
            <View style={styles.wrapBtn}>
              <Buttons title="Absen Masuk" onPress={onSubmit} />
              <Gap width={10} />
              <Buttons
                title="Absen Pulang"
                type="secondary"
                onPress={() => navigation.navigate('AbsensiNew')}
              />
            </View>
          </View>
        </View>
        <Gap height={40} />
      </View>
    </ScrollView>
  );
};

export default Absensi;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 15,
  },
  wrapBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrapLokasi: {
    flexDirection: 'row',
  },
  wrapLokasis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapAbsensiLokasi: {
    backgroundColor: colors.bg.secondary,
    paddingBottom: 35,
    borderRadius: 15,
  },
  addresLokasi: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    paddingLeft: 10,
  },
  txtTgl: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.for,
  },
  txtjam: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.tree,
  },
  map: {
    height: 380,
    borderRadius: 15,
  },
  contentLokasi: {
    paddingHorizontal: 10,
  },
});
