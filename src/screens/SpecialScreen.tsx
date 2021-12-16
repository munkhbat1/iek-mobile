import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

export const SpecialScreen = () => {
  const [remotText, setRemotText] = useState('');

  useEffect(() => {
    axios
      .get(`${Config.API_URI}/`)
      .then(res => setRemotText(res.data))
      .catch(err => {
        console.log(err);
        setRemotText('Алдаа гарлаа. Дахин оролдоно уу.');
      });
    console.log('useEffect called');
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Special Screen</Text>
      <Text>{Config.API_URI}</Text>
      <Text>{remotText}</Text>
    </View>
  );
};
