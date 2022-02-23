import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILCalendar, ILSisa, ILTotal} from '../../assets';
import {Buttons, Gap, Header, Input, JamTgl, MultiText} from '../../components';
import {colors, fonts, getData, showMessage, storeData} from '../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../redux/action';

const Cuti = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const [dates, setDates] = useState(new Date());
  const [modes, setModes] = useState('date');
  const [shows, setShows] = useState(false);
  const [texts, setTexts] = useState('');

  const [userProfile, setUserProfile] = useState({});
  const [keterangan, setKeterangan] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getUTCFullYear() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getDate();

    setText(fDate);
  };

  const onChanges = (event, selectedDates) => {
    const currentDates = selectedDates || dates;
    setShows(Platform.OS === 'ios');
    setDates(currentDates);

    let tempDates = new Date(currentDates);
    let fDates =
      tempDates.getUTCFullYear() +
      '/' +
      (tempDates.getMonth() + 1) +
      '/' +
      tempDates.getDate();

    setTexts(fDates);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showModes = currentModes => {
    setShows(true);
    setModes(currentModes);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showDatepickers = () => {
    showModes('dates');
  };

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
    data.append('tgl_mulai', text);
    data.append('tgl_selesai', texts);
    data.append('keterangan', keterangan);

    // console.log('data before send :', data);
    dispatch(setLoading(true));
    await Axios({
      method: 'post',
      url: 'http://hrm.digiponic.co.id/api/pengajuan/PengajuanCuti',
      data,
      headers: {
        Cookie: 'ci_session=mnc1vkesg4mrthkkqqgcmrcaple7l9rp',
      },
    })
      .then(res => {
        dispatch(setLoading(false));
        showMessage('Berhasil mengirim data', 'success');

        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        // console.log('send :', res.data);
      })
      .catch(err => {
        // console.log(err);
        dispatch(setLoading(false));
        showMessage('Maaf ada kesalahan dalam sistem');
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Cuti" onPress={() => navigation.goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.wrapContent}>
        <JamTgl />
        <Gap height={30} />
        <View style={styles.wrapTgl}>
          <Gap width={17} />
          <View style={styles.Miring}>
            <ILSisa />
            <Gap width={10} />
            <View>
              <Text style={styles.tglJam}>Sisa Cuti</Text>
              <Text style={styles.JamTgl}>10</Text>
            </View>
          </View>
          <Gap width={70} />
          <View style={styles.Miring}>
            <ILTotal />
            <Gap width={10} />
            <View>
              <Text style={styles.tglJam}>Total Cuti</Text>
              <Text style={styles.JamTgl}>3</Text>
            </View>
            <Gap width={7} />
          </View>
          <Gap width={10} />
        </View>
        <Gap height={30} />
        <View>
          <View style={styles.wrapInput}>
            <View style={styles.wrapTxt}>
              <TouchableOpacity onPress={showDatepicker}>
                <Input judul="Tanggal Cuti" disable>
                  {text}
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
          <View style={styles.wrapInput}>
            <View style={styles.wrapTxt}>
              <TouchableOpacity onPress={showDatepickers}>
                <Input judul="Tanggal Akhir Cuti" disable>
                  {texts}
                </Input>
              </TouchableOpacity>
              {shows && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dates}
                  mode={modes}
                  is24Hour={true}
                  display="default"
                  onChange={onChanges}
                />
              )}
            </View>
            <ILCalendar style={styles.vectorCalen} />
          </View>
          <Gap height={20} />
          <MultiText
            judul="Alasan Cuti"
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

export default Cuti;

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
