import { CustomButtonProps } from '@/types';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = (props: CustomButtonProps) => {
 const { className, color, background, text, sizeText, icon, handlePress } =
  props;
 return (
  <TouchableOpacity
   className={className}
   style={{ backgroundColor: background }}
   onPress={handlePress}
  >
   {text !== undefined ? (
    <Text
     className={`${sizeText} font-bold text-center`}
     style={{ color: color }}
    >
     {text}
    </Text>
   ) : null}

   {icon}
  </TouchableOpacity>
 );
};

export { CustomButton };
