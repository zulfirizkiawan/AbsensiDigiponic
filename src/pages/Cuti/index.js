import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILCalendar, ILJam, ILSisa, ILTgl, ILTotal} from '../../assets';
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

const Cuti = ({navigation}) => {
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
              <Input judul="Tanggal Cuti" />
            </View>
            <ILCalendar style={styles.vectorCalen} />
          </View>
          <Gap height={20} />
          <View style={styles.wrapInput}>
            <View style={styles.wrapTxt}>
              <Input judul="Tanggal Akhir Cuti" />
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
