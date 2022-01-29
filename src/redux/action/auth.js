import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';
import Axios from 'axios';

export const loginAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(`http://hrm.digiponic.co.id/api/authentications/login`, form)
    .then(res => {
      const profile = res.data.data;
      const token = `${res.data.data.email}`;
      dispatch(setLoading(false));
      storeData('token', token);
      storeData('userProfile', profile);
      showMessage('Berhasil login', 'success');
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage('Email atau Password anda salah');
    });
};
