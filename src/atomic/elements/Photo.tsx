import { PhotoProps } from '@/types';
import React from 'react';
import { Image, View } from 'react-native';

const Photo = (props: PhotoProps) => {
 const { image, className } = props;
 const { alt, size, src } = image;
 return (
  <View className="flex-row justify-center">
   <Image
    className={className}
    source={src}
    alt={alt}
    style={{ width: size.width, height: size.height }}
   />
  </View>
 );
};

export { Photo };
