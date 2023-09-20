import React from 'react';
import { View, Text } from 'react-native';
import { CustomButton } from '@/atomic/elements';
import { theme } from '@/atomic/theme';
import { FooterFormProps } from '@/types';

const FooterForm = (props: FooterFormProps) => {
 const { text, textButton, handlePress } = props;
 return (
  <View className="flex-row justify-center space-x-1">
   <View>
    <Text className="text-gray-500 font-semibold">{text}</Text>
   </View>
   <CustomButton
    className=""
    background=""
    color={theme.yellow}
    sizeText=""
    text={textButton}
    handlePress={handlePress}
   />
  </View>
 );
};

export { FooterForm };
