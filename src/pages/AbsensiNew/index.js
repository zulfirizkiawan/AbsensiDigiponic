import {Text, StyleSheet, View, Dimensions} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import MapView, {Polyline, PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {colors, fonts} from '../../utils';
import {ICPin} from '../../assets';
import {Buttons, Gap, Garis} from '../../components';
// import Geolocation from '@react-native-community/geolocation';
import {NavigationContainer} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class AbsensiNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      coordinates: [],
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      },
    );
    this.watchID = Geolocation.watchPosition(
      position => {
        this.setState({initialPosition: position});
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  render() {
    return (
      <View style={styles.WrapContainer}>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0522,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}>
            <Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }}></Marker>
          </MapView>
          <Gap height={10} />
          <View style={styles.contentLokasi}>
            <Gap height={15} />
            <View style={styles.wrapLokasi}>
              <ICPin />
              <Text style={styles.addresLokasi}>
                {this.state.latitude} --
                {this.state.longitude}
              </Text>
            </View>

            <Gap height={10} />
            <Garis />
            <Gap height={10} />
            <View style={styles.wrapBtn}>
              <Buttons
                title="Absen Masuk"
                onPress={() => this.props.navigation.navigate('Maps')}
              />
              <Gap width={10} />
              <Buttons title="Absen Pulang" type="secondary" />
            </View>
            <Gap height={30} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: colors.bg.secondary,
    borderRadius: 15,
  },
  map: {
    height: 380,
  },
  WrapContainer: {
    flex: 1,
    backgroundColor: colors.white,
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
  contentLokasi: {
    paddingHorizontal: 10,
  },
});
