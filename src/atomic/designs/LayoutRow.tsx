import { LayoutRowProps } from '@/types';
import React from 'react';
import { View } from 'react-native';

const LayoutRow = (props: LayoutRowProps) => {
 const { children } = props;
 return <View className="flex-row justify-center space-x-5">{children}</View>;
};

export { LayoutRow };
