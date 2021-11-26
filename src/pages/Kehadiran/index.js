import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components';
import {colors} from '../../utils';

const Kehadiran = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Kehadiran" onPress={() => navigation.goBack()} />
      <View>
        <Text>jbjb</Text>
      </View>
    </View>
  );
};

export default Kehadiran;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
