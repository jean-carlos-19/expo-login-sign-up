import React from 'react';
import {
 ImageSourcePropType,
 NativeSyntheticEvent,
 TextInputFocusEventData,
} from 'react-native';

/*  */
interface image {
 title: string;
 src: ImageSourcePropType;
 alt: string;
 size: {
  width: number;
  height: number;
 };
}
/*  */
interface PhotoProps {
 className?: string;
 image: image;
}
interface CustomButtonProps {
 className: string;
 background: string;
 color?: string;
 text?: string;
 sizeText?: string;
 icon?: React.ReactNode;
 handlePress: () => void;
}
interface LayoutRowProps {
 children: React.ReactNode;
}
interface CoverFormProps {
 image: image;
 handlePress: () => void;
}
interface FooterFormProps {
 text: string;
 textButton: string;
 handlePress: () => void;
}
interface BodyFormProps {
 form: React.ReactNode;
 footer: React.ReactNode;
}
interface CustomInputProps {
 label: string;
 value: string | undefined;
 placeholder: string;
 handleChange: (text: string) => void | undefined;
 handleBlur: (
  e: NativeSyntheticEvent<TextInputFocusEventData>,
 ) => void | undefined;
}
/*  */
type RootStackParamList = {
 Home: undefined;
 Login: undefined;
 SignUp: undefined;
 Welcome: undefined;
};
export type {
 RootStackParamList,
 CustomButtonProps,
 CustomInputProps,
 FooterFormProps,
 LayoutRowProps,
 CoverFormProps,
 BodyFormProps,
 PhotoProps,
};
