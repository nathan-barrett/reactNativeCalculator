import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import EStyleSheet from 'react-native-extended-stylesheet';


EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#979797',
  $inputText: '#797979',
});

export default () => <Home />;
