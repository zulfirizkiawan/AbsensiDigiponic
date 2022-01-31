import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({judul, disable, keyboardType, ...restProps}) => {
  const [borders, setBorders] = useState(colors.text.five);
  const onFocusForm = () => {
    setBorders(colors.text.primary);
  };
  const onBlurForm = () => {
    setBorders(colors.text.primary);
  };

  return (
    <View>
      <Text style={styles.Tjudul}>{judul}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.TI(borders)}
        editable={!disable}
        selectTextOnFocus={!disable}
        keyboardType={keyboardType}
        {...restProps}></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Tjudul: {
    color: colors.text.secondary,
    fontSize: 14,
    fontFamily: fonts.primary[500],
  },
  TI: borders => ({
    marginTop: 10,
    fontSize: 16,
    color: borders,
    backgroundColor: colors.bg.primary,
    fontFamily: fonts.primary[400],
    borderRadius: 15,

    paddingLeft: 10,
  }),
});
