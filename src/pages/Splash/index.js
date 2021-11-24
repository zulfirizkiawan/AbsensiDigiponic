import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {ILLOGO} from '../../assets';
import {fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ILLOGO />
      <Text style={styles.text}>PT. Maju Bersama</Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: fonts.primary[900],
    color: '#334639',
    marginTop: 5,
  },
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
