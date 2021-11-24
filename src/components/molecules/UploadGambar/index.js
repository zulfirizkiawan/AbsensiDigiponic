import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICUpload} from '../../../assets';

const UploadGambar = () => {
  return (
    <View style={styles.wrapUG}>
      <Text style={styles.label}>Foto Tempat kerja</Text>
      <View style={styles.wrapImage}>
        <ICUpload style={styles.uplImg} />
      </View>
    </View>
  );
};

export default UploadGambar;

const styles = StyleSheet.create({
  wrapImage: {
    width: 118,
    height: 118,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  label: {
    fontWeight: '500',
    fontSize: 14,
    color: 'black',
    letterSpacing: 0.5,
  },
  wrapUG: {
    alignItems: 'center',
  },
});
