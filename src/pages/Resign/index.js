import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILCalendar, ILJam, ILTgl} from '../../assets';
import {
  Buttons,
  Gap,
  Header,
  Input,
  InputDate,
  JamTgl,
  MultiText,
} from '../../components';
import {colors, fonts} from '../../utils';

const Resign = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Resign" onPress={() => navigation.goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.wrapContent}>
        <View style={styles.wrapTgl}>
          <Gap width={2} />
          <View style={styles.Miring}>
            <ILTgl />
            <Gap width={10} />
            <View>
              <Text style={styles.tglJam}>Tanggal</Text>
              <Text style={styles.JamTgl}>18 Okt 2021</Text>
            </View>
          </View>
          <Gap width={10} />
          <View style={styles.Miring}>
            <ILJam />
            <Gap width={10} />
            <View>
              <Text style={styles.tglJam}>Jam</Text>
              <Text style={styles.JamTgl}>08:09:44</Text>
            </View>
          </View>
          <Gap width={2} />
        </View>
        <Gap height={30} />
        <View>
          <View style={styles.wrapInput}>
            <View style={styles.wrapTxt}>
              <Input judul="Tanggal Masuk Kerja" />
            </View>
            <ILCalendar style={styles.vectorCalen} />
          </View>
          <Gap height={20} />
          <View style={styles.wrapInput}>
            <View style={styles.wrapTxt}>
              <Input judul="Tanggal Keluar Kerja" />
            </View>
            <ILCalendar style={styles.vectorCalen} />
          </View>
          <Gap height={20} />
          <MultiText judul="Alasan Keluar" />
        </View>
        <Buttons title="Kirim" onPress={() => alert('jaj')} />
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
