import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ILVectorLogin} from '../../assets';
import {Buttons, Gap, Input} from '../../components';
import {colors, fonts} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#F3F7FF']}
      style={styles.linearGradient}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView showsVerticalScrollIndicator={true} style={styles.Sc}>
        <Gap height={70} />
        <ILVectorLogin style={styles.imgVector} />
        <Gap height={20} />
        <Text style={styles.selamat}>Selamat datang,</Text>
        <View style={styles.wrapLM}>
          <Text style={styles.lg}>Login</Text>
          <Text style={styles.um}> untuk melanjutkan</Text>
        </View>
        <View style={styles.wrapInp}>
          <Input judul="Email" />
          <Gap height={20} />
          <Input judul="Kata sandi" />
          <Gap height={35} />
          <Buttons
            title="Login"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
        <Gap height={20} />
      </ScrollView>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 20,
  },
  Sc: {
    flex: 1,
  },
  selamat: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.secondary,
  },
  lg: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.secondary,
  },
  um: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.secondary,
  },
  wrapLM: {
    flexDirection: 'row',
  },
  wrapInp: {
    backgroundColor: colors.white,
    paddingVertical: 35,
    paddingHorizontal: 15,
    marginTop: 20,
    borderRadius: 25,
  },
  imgVector: {
    alignSelf: 'center',
  },
});
