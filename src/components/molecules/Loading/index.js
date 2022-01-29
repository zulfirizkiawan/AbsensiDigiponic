import {StyleSheet, ActivityIndicator, View, Text} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#5cb85c" />
      <Text style={styles.load}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  load: {
    fontFamily: fonts.primary[500],
    color: colors.black,
    fontSize: 16,
    marginTop: 10,
  },
});
