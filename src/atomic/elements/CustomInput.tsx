import { CustomInputProps } from '@/types';
import React from 'react';
import { View, Text, TextInput } from 'react-native';

const CustomInput = (props: CustomInputProps) => {
 const { label, value, placeholder, handleChange, handleBlur } = props;
 return (
  <View className="space-y-1">
   <Text className="text-gray-700 ml-4">{label}</Text>
   <TextInput
    className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
    value={value}
    placeholder={placeholder}
    onChangeText={handleChange}
    onBlur={handleBlur}
   />
  </View>
 );
};

export { CustomInput };
