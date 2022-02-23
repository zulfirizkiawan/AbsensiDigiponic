import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILCalendar, ILJam, ILTgl} from '../../assets';
import {Buttons, Gap, Header, Input, JamTgl, MultiText} from '../../components';
import {colors, fonts, getData, showMessage, storeData} from '../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../redux/action';

const Resign = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [userProfile, setUserProfile] = useState({});

  // const Axios = require('axios').default;

  // ambil datepicker
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    // let tempDate = new Date(currentDate);
    // let fDate =
    //   tempDate.getDate() +
    //   '/' +
    //   (tempDate.getMonth() + 1) +
    //   '/' +
    //   tempDate.getUTCFullYear();

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getUTCFullYear() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getDate();

    setTextDate(fDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  //ambil data user

  useEffect(() => {
    getData('userProfile').then(res => {
      // console.log('profile', res);
      setUserProfile(res.idusers);
    });
  }, []);

  const dispatch = useDispatch();

  //post data resign
  const onSubmit = async () => {
    const FormData = require('form-data');
    const data = new FormData();
    data.append('karyawan_id', userProfile);
    data.append('tgl_resign', textDate);
    data.append('keterangan', keterangan);

    // console.log('data before send :', data);
    dispatch(setLoading(true));
    await Axios({
      method: 'post',
      url: 'http://hrm.digiponic.co.id/api/pengajuan/PengajuanResign',
      data,
      headers: {
        Cookie: 'ci_session=lf4ej8bv2f7j8l0j15hria64eebr0esg',
      },
    })
      .then(res => {
        dispatch(setLoading(false));
        showMessage('Berhasil mengirim data', 'success');
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        // console.log('send :', res.data.data);
      })
      .catch(err => {
        dispatch(setLoading(false));
        showMessage('Maaf ada kesalahan dalam sistem');
        // console.log(err);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Resign" onPress={() => navigation.goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.wrapContent}>
        <JamTgl />
        <Gap height={30} />
        <View>
          <View style={styles.wrapInput}>
            <View style={styles.wrapTxt}>
              <TouchableOpacity onPress={showDatepicker}>
                <Input judul="Tanggal keluar kerja" disable>
                  {textDate}
                </Input>
              </TouchableOpacity>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
            <ILCalendar style={styles.vectorCalen} />
          </View>
          <Gap height={20} />
          <MultiText
            judul="Alasan Keluar"
            value={keterangan}
            onChangeText={value => setKeterangan(value)}
          />
        </View>
        <Gap height={40} />
        <Buttons title="Kirim" onPress={onSubmit} />
      </ScrollView>
    </View>
  );
};

export default Resign;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapContent: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  tglJam: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.tree,
  },
  Miring: {
    flexDirection: 'row',
  },
  JamTgl: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.secondary,
  },
  wrapTgl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapInput: {
    flexDirection: 'row',
  },
  wrapTxt: {
    flex: 1,
    marginRight: 17,
  },
  vectorCalen: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});
