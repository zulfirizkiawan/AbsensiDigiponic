import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILCalendar, ILJam, ILTgl} from '../../assets';
import {Buttons, Gap, Header, Input, JamTgl} from '../../components';
import {colors, fonts} from '../../utils';

const Resign = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Resign" onPress={() => navigation.goBack()} />
      <View style={styles.Resignn}>
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
          <Gap height={25} />
          <Input judul="Tanggal Masuk Kerja" />
          <Input judul="Tanggal Keluar Kerja" />
        </ScrollView>
        {/* <Buttons title="Ajukan Resign" onPress={() => alert('jaj')} /> */}
      </View>
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
  Resignn: {
    flex: 1,
    justifyContent: 'space-between',
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
});
