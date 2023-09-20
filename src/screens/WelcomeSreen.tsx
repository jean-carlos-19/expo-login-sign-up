import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomButton, Photo } from '@/atomic/elements';
import { theme } from '@/atomic/theme';
import { WELCOME } from '@/constants';
import { IMAGES } from '@/constants';

const WelcomeSreen = () => {
 const navigation = useNavigation();
 return (
  <>
   <StatusBar backgroundColor={theme.bg} barStyle={'light-content'} />
   <View
    className="flex-1 flex-col justify-center items-center"
    style={{ backgroundColor: theme.bg }}
   >
    <Text className="text-white font-bold text-4xl text-center">
     {WELCOME.title}
    </Text>
    <Photo image={IMAGES.WELCOME} />

    <View className="space-y-4">
     <CustomButton
      className="px-[30%] py-[5%] rounded-xl"
      background={theme.yellow}
      color={theme.gray}
      sizeText="text-xl"
      text={WELCOME.bottonLogin}
      handlePress={() => navigation.navigate('Login')}
     />
     <View className="flex-row justify-center space-x-1">
      <View>
       <Text className="text-white font-semibold">{WELCOME.text}</Text>
      </View>
      <CustomButton
       className=""
       background=""
       color={theme.yellow}
       sizeText=""
       text={WELCOME.bottonSignIn}
       handlePress={() => navigation.navigate('SignUp')}
      />
     </View>
    </View>
   </View>
  </>
 );
};

export { WelcomeSreen };
