import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import LoginSvg from '../assets/svgs/login.svg';
import GoogleSvg from '../assets/svgs/google.svg';
import FacebookSvg from '../assets/svgs/facebook.svg';
import TwitterSvg from '../assets/svgs/twitter.svg';

const LoginView = ({navigation}: {navigation: any}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
        }}>
        <LoginSvg
          height={250}
          width={250}
          style={{
            transform: [{rotate: '-5deg'}],
          }}
        />

        {/* Login Form */}
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <TextInput
            placeholder="email"
            keyboardType="email-address"
            style={style.input}></TextInput>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            style={style.input}></TextInput>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#9A00F2',
            padding: 8,
            borderRadius: 10,
            flexDirection: 'row',
            marginBottom: 10,
          }}
          onPress={() => {}}>
          <Text style={style.button}>Login</Text>
        </TouchableOpacity>

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 20}}>
          {' '}
          or login with
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={() => {}}>
            <GoogleSvg height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <FacebookSvg height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <TwitterSvg height={24} width={24} />
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 20, flexDirection: 'row'}}>
          <Text style={{textAlign: 'center', color: '#666'}}>
            {' '}
            New to the app?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#9A00F2'}}> Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  brand: {
    fontSize: 36,
    color: '#9A00F2',
    fontWeight: '800',
    fontStyle: 'italic',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  button: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
});

export default LoginView;
