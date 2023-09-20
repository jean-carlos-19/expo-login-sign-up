import React from 'react';
import { Text, View } from 'react-native';
import { SIGN_IN, SIGN_IN_FORM } from '@/constants';
import { CustomInput, CustomButton } from '@/atomic/elements';
import { theme } from '@/atomic/theme';
import { Formik, FormikHelpers } from 'formik';
import { useSingIn } from '@/hooks';
import { SingIngModel } from '@/models';
import { BottonProviders } from './BottonProviders';
import { FooterForm } from './FooterForm';
import { useNavigation } from '@react-navigation/native';

const SignUpForm = () => {
 const { SignInVaalidation, entity } = useSingIn();
 const navigation = useNavigation();
 return (
  <Formik
   initialValues={entity!}
   validationSchema={SignInVaalidation}
   onSubmit={(
    values: SingIngModel,
    formikHelpers: FormikHelpers<SingIngModel>,
   ): void => {}}
  >
   {(props) => {
    const { values, handleChange, handleBlur } = props;
    return (
     <View className="flex-1 flex-col justify-between items-stretch">
      <CustomInput
       label={SIGN_IN_FORM.fullName.text}
       value={values.fullName}
       placeholder={SIGN_IN_FORM.fullName.placeholder}
       handleChange={handleChange('fullName')}
       handleBlur={handleBlur('fullName')}
      />
      <CustomInput
       label={SIGN_IN_FORM.email.text}
       value={values.email}
       placeholder={SIGN_IN_FORM.email.placeholder}
       handleChange={handleChange('email')}
       handleBlur={handleBlur('email')}
      />
      <CustomInput
       label={SIGN_IN_FORM.password.text}
       value={values.password}
       placeholder={SIGN_IN_FORM.password.placeholder}
       handleChange={handleChange('password')}
       handleBlur={handleBlur('password')}
      />
      <CustomButton
       className="py-3 rounded-xl"
       text={SIGN_IN_FORM.button}
       background={theme.yellow}
       color={theme.gray}
       handlePress={() => null}
      />
      <Text className="text-xl text-gray-700 font-bold text-center">Or</Text>
      <BottonProviders />
      <FooterForm
       textButton="Login"
       text={SIGN_IN.text}
       handlePress={() => navigation.navigate('Login')}
      />
     </View>
    );
   }}
  </Formik>
 );
};

export { SignUpForm };
