import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

const Dropdown = () => {
  const [pickerValue, setPickerValue] = useState('Java');

  return (
    <View>
      <Text style={styles.Judul}>Lama Izin</Text>
      <View style={styles.content}>
        <Picker
          style={styles.pickers}
          selectedValue={pickerValue}
          onValueChange={itemValue => setPickerValue(itemValue)}>
          <Picker.Item label="Setengah" value="java" />
          <Picker.Item label="1" value="js" />
          <Picker.Item label="2" value="js" />
        </Picker>
        <Text style={styles.txt}>Hari</Text>
      </View>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickers: {
    width: 200,
    height: 45,
    color: colors.text.secondary,
    backgroundColor: colors.bg.primary,
  },
  txt: {
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 16,
    marginLeft: 20,
  },
  Judul: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    fontSize: 14,
  },
});
