import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICPin} from '../../assets';
import {Buttons, CardKehadiran, Gap, Garis, JamTgl} from '../../components';
import {colors, fonts} from '../../utils';
import MapView, {Marker} from 'react-native-maps';

const Absensi = ({navigation}) => {
  return (
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
          <View style={styles.wrapLokasi}>
            <Text style={styles.txtTgl}>18 Okt 2021</Text>
            <Text style={styles.txtjam}>08:01:31</Text>
          </View>
          <Gap height={15} />
          <View style={styles.wrapLokasi}>
            <ICPin />
            <Text style={styles.addresLokasi}>
              Jl. Perusahaan Raya No.34, Bodosari, Tanjungtirto, Kec. Singosari,
              Kabupaten Malang, Jawa Timur 65153
            </Text>
          </View>
          <Gap height={10} />
          <Garis />
          <Gap height={10} />
          <View style={styles.wrapBtn}>
            <Buttons title="Absen Masuk" />
            <Gap width={20} />
            <Buttons title="Absen Pulang" type="secondary" />
          </View>
        </View>
      </View>
    </View>
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
    paddingHorizontal: 10,
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
