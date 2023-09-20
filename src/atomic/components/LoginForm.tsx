import React from 'react';
import { Text, View } from 'react-native';
import { LOGIN, LOGIN_FORM } from '@/constants';
import { CustomInput, CustomButton } from '@/atomic/elements';
import { theme } from '@/atomic/theme';
import { Formik, FormikHelpers } from 'formik';
import { useLogin } from '@/hooks';
import { LoginModel } from '@/models';
import { BottonProviders } from './BottonProviders';
import { FooterForm } from './FooterForm';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
 const { entity, LoginValidation } = useLogin();
 const navigation = useNavigation();
 return (
  <Formik
   initialValues={entity!}
   validationSchema={LoginValidation}
   onSubmit={(
    values: LoginModel,
    formikHelpers: FormikHelpers<LoginModel>,
   ): void => {}}
  >
   {(props) => {
    const { values, handleChange, handleBlur } = props;
    return (
     <View className="flex-1 flex-col justify-between items-stretch">
      <CustomInput
       label={LOGIN_FORM.email.text}
       value={values.email}
       placeholder={LOGIN_FORM.email.placeholder}
       handleChange={handleChange('email')}
       handleBlur={handleBlur('email')}
      />
      <CustomInput
       label={LOGIN_FORM.password.text}
       value={values.password}
       placeholder={LOGIN_FORM.password.placeholder}
       handleChange={handleChange('password')}
       handleBlur={handleBlur('password')}
      />
      <CustomButton
       className="lex items-end"
       text={LOGIN_FORM.text}
       background={'transparent'}
       color={theme.gray}
       handlePress={() => null}
      />
      <CustomButton
       className="py-3 rounded-xl"
       text={LOGIN_FORM.button}
       background={theme.yellow}
       color={theme.gray}
       handlePress={() => null}
      />
      <Text className="text-xl text-gray-700 font-bold text-center">Or</Text>
      <BottonProviders />
      <FooterForm
       textButton={LOGIN.bottonSignIn}
       text={LOGIN.text}
       handlePress={() => navigation.navigate('SignUp')}
      />
     </View>
    );
   }}
  </Formik>
 );
};

export { LoginForm };
