import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILCalendar, ILSisa, ILTotal} from '../../assets';
import {Buttons, Gap, Header, Input, JamTgl, MultiText} from '../../components';
import {colors, fonts} from '../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';

const Cuti = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getUTCFullYear();

    setText(fDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
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
              <TouchableOpacity>
                <Input judul="Tanggal Akhir Cuti" disable />
              </TouchableOpacity>
            </View>
            <ILCalendar style={styles.vectorCalen} />
          </View>
          <Gap height={20} />
          <MultiText judul="Alasan Cuti" />
        </View>
        <Gap height={40} />
        <Buttons title="Kirim" onPress={() => alert('jaj')} />
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
