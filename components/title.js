import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import axios from 'axios';

const Title = props => {
  const login = async () => {
    try {
      const data = {
        email: 'ianat4@wordup.com.tw',
        password: '123123211312',
      };
      let res = await axios.request({
        url: 'https://api-staging.wordup.com.tw/api/v1/auth/sign_in',
        method: 'POST',
        data,
      });
      // console.log('@@@@ res', res);
      let resData = res.data;
      console.log('resData', resData);
      // let res = await fetch("/api/users");
      // let data = await res.json();
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
      // console.log('error.data.error', error.data.error)
      // console.log('error.response.data.error', error.response.data.error);
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
