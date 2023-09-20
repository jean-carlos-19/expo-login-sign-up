import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { ICONS } from '@/constants';

const BottonProviders = () => {
 return (
  <View className="flex-row justify-center space-x-12">
   <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
    <Image
     className="w-10 h-10"
     source={ICONS.GOOGLE.src}
     alt={ICONS.GOOGLE.alt}
    />
   </TouchableOpacity>
   <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
    <Image
     className="w-10 h-10"
     source={ICONS.FACEBOOK.src}
     alt={ICONS.FACEBOOK.alt}
    />
   </TouchableOpacity>
   <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
    <Image
     className="w-10 h-10"
     source={ICONS.APPLE.src}
     alt={ICONS.APPLE.alt}
    />
   </TouchableOpacity>
  </View>
 );
};

export { BottonProviders };
