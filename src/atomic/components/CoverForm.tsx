import React from 'react';
import { View } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { CustomButton, Photo } from '@/atomic/elements';
import { theme } from '../theme';
import { CoverFormProps } from '@/types';

const CoverForm = (props: CoverFormProps) => {
 const { handlePress, image } = props;
 return (
  <View className="flex">
   <View className="flex-col p-2 justify-center items-center">
    <CustomButton
     className="self-start p-2 rounded-tr-2xl rounded-bl-2xl"
     background={theme.yellow}
     icon={<ArrowLeftIcon size={20} color={'black'} />}
     handlePress={handlePress}
    />
    <Photo image={image} />
   </View>
  </View>
 );
};

export { CoverForm };
