import { BodyFormProps } from '@/types';
import React from 'react';
import { View } from 'react-native';

const BodyForm = (props: BodyFormProps) => {
 const { footer, form } = props;
 return (
  <View
   className="flex-1 flex-col justify-between items-stretch bg-white p-8"
   style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
  >
   {form}

   {footer}
  </View>
 );
};

export { BodyForm };
