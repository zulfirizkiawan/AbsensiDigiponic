import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import moment from 'moment';
import Gap from '../../atoms/Gap';
import {ILJam, ILTgl} from '../../../assets';

const JamTgl = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    var time = moment().utcOffset('+07:00').format('HH:mm:ss');
    var date = moment().utcOffset('+07:00').format('DD MMM YYYY');
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(date);
    setCurrentTime(time);
  }, []);

  return (
    <View style={styles.wrapTgl}>
      <Gap width={2} />
      <View style={styles.Miring}>
        <ILTgl />
        <Gap width={10} />
        <View>
          <Text style={styles.tglJam}>Tanggal</Text>
          <Text style={styles.JamTgl}>{currentDate}</Text>
        </View>
      </View>
      <Gap width={10} />
      <View style={styles.Miring}>
        <ILJam />
        <Gap width={10} />
        <View>
          <Text style={styles.tglJam}>Jam</Text>
          <Text style={styles.JamTgl}>{currentTime}</Text>
        </View>
      </View>
      <Gap width={2} />
    </View>
  );
};

export default JamTgl;

const styles = StyleSheet.create({
  wrapTgl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Miring: {
    flexDirection: 'row',
  },
  tglJam: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.tree,
  },
  JamTgl: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.secondary,
  },
});
