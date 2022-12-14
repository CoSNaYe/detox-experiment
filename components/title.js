import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import axios from 'axios';

export const axiosInstance = axios;

const Title = props => {
  const login = async () => {
    try {
      const data = {
        email: 'test@test.com.tw',
        password: '123123211312',
      };
      let res = await axiosInstance.request({
        // baseURL: 'http://localhost:3000',
        baseURL: 'https://api-staging.wordup.com.tw',
        url: '/api/v1/auth/sign_in',
        method: 'POST',
        data,
      });
      let resData = res.data;
      console.log('resData', resData);
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={login}
        style={{backgroundColor: 'lightblue', padding: 8}}
        testID="login-submit-btn">
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Title;
