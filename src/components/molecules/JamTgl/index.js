import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';
import moment from 'moment';

const JamTgl = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    var time = moment().utcOffset('+07:00').format('hh:mm');
    var date = moment().utcOffset('+07:00').format('DD MMM YYYY');
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(date);
    setCurrentTime(time);
  }, []);

  return (
    <View style={styles.wrapJamTgl}>
      <View style={styles.wrapJam}>
        <Text style={styles.jamTgl}>Jam</Text>

        <Text style={styles.Jam}>{currentTime}</Text>
      </View>
      <View style={styles.strip} />
      <View style={styles.wrapTgl}>
        <Text style={styles.jamTgl}>Tanggal</Text>

        <Text style={styles.Jam}>{currentDate}</Text>
      </View>
    </View>
  );
};

export default JamTgl;

const styles = StyleSheet.create({
  wrapJamTgl: {
    height: 116,
    backgroundColor: '#0D9C57',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jamTgl: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
  },
  strip: {
    height: 85,
    width: 1,
    backgroundColor: 'white',
  },
  wrapJam: {
    paddingLeft: 40,
  },
  wrapTgl: {
    paddingRight: 40,
  },
  Jam: {
    fontSize: 30,
    fontFamily: fonts.primary[700],
    color: 'white',
    marginTop: 6,
  },
});
