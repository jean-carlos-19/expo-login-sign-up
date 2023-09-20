import { IMAGES } from '@/constants';
import { theme } from '@/atomic/theme';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CoverForm, LoginForm } from '@/atomic/components';

const LoginScreen = () => {
 const navigation = useNavigation();
 return (
  <>
   <StatusBar backgroundColor={theme.bg} barStyle={'light-content'} />
   <View className="flex-1 bg-white" style={{ backgroundColor: theme.bg }}>
    <CoverForm handlePress={() => navigation.goBack()} image={IMAGES.LOGIN} />
    <View
     className="flex-1 flex-col justify-between items-stretch bg-white p-8"
     style={{
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
     }}
    >
     <LoginForm />
    </View>
   </View>
  </>
 );
};

export { LoginScreen };
