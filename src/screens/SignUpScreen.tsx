import { IMAGES } from '@/constants';
import { theme } from '@/atomic/theme';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { CoverForm, SignUpForm } from '@/atomic/components';

const SignUpScreen = () => {
 const navigation = useNavigation();
 return (
  <>
   <StatusBar backgroundColor={theme.bg} barStyle={'light-content'} />
   <View
    className="w-full h-full flex-col justify-between items-stretch"
    style={{ backgroundColor: theme.bg }}
   >
    <CoverForm handlePress={() => navigation.goBack()} image={IMAGES.SIGNUP} />
    <View
     className="flex-1 flex-col justify-between items-stretch bg-white p-8"
     style={{
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
     }}
    >
     <SignUpForm />
    </View>
   </View>
  </>
 );
};

export { SignUpScreen };
