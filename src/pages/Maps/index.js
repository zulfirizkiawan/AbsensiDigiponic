import {Text, StyleSheet, View, Dimensions} from 'react-native';
import React, {Component} from 'react';
import MapView, {Polyline, PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';
const {width, height} = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      Address: null,
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    Geolocation.getCurrentPosition(info => {
      let lat = info.coords.latitude;
      let long = info.coords.longitude;

      console.log(lat);
      console.log(long);
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0125,
        longitudeDelta: 0.0125,
      };
      this.setState({initialPosition: initialRegion});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.initialPosition}
          showsUserLocation={true}
        />
        <Text>Latitude: {this.state.initialPosition.latitude}</Text>
        <Text>Latitude: {this.state.initialPosition.longitude}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // // bottom: 0,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    flex: 1,
  },
  map: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    height: 380,
  },
});
