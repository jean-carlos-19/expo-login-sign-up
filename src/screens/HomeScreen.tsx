import React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

const HomeScreen = () => {
 return <View style={{ paddingTop: statusBarHeight }}></View>;
};

export { HomeScreen };
