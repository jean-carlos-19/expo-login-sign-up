import {
 imgApple,
 imgFacebook,
 imgGoogle,
 imgLogin,
 imgSignUp,
 imgWelcome,
} from '@/assets';
const IMAGES = Object.freeze({
 LOGIN: {
  title: 'Login',
  src: imgLogin,
  alt: '',
  size: {
   width: 200,
   height: 200,
  },
 },
 SIGNUP: {
  title: 'Sign Up',
  src: imgSignUp,
  alt: '',
  size: {
   width: 165,
   height: 110,
  },
 },
 WELCOME: {
  title: 'Welcome',
  src: imgWelcome,
  alt: '',
  size: {
   width: 350,
   height: 350,
  },
 },
});
const WELCOME = Object.freeze({
 title: "Let's Get Started!",
 bottonLogin: 'Log In',
 bottonSignIn: 'Sign In',
 text: 'Already have a account?',
});
const LOGIN = Object.freeze({
 title: "Let's Get Started!",
 bottonLogin: 'Log In',
 bottonSignIn: 'Sign In',
 text: "Don't have a account?",
});
const SIGN_IN = Object.freeze({
 text: 'Already have a account?',
});
const LOGIN_FORM = Object.freeze({
 email: {
  text: 'Email',
  placeholder: '',
 },
 password: {
  text: 'Password',
  placeholder: '',
 },
 text: 'Forogot Password?',
 button: 'Login',
});
const SIGN_IN_FORM = Object.freeze({
 fullName: {
  text: 'Full Name',
  placeholder: '',
 },
 email: {
  text: 'Email',
  placeholder: '',
 },
 password: {
  text: 'Password',
  placeholder: '',
 },
 button: 'Sign In',
});
const ICONS = Object.freeze({
 FACEBOOK: {
  title: 'Facebook',
  src: imgFacebook,
  alt: '',
  size: {
   width: 350,
   height: 350,
  },
 },
 GOOGLE: {
  title: 'Google',
  src: imgGoogle,
  alt: '',
  size: {
   width: 350,
   height: 350,
  },
 },
 APPLE: {
  title: 'Apple',
  src: imgApple,
  alt: '',
  size: {
   width: 350,
   height: 350,
  },
 },
});
export { IMAGES, ICONS, WELCOME, LOGIN, SIGN_IN, LOGIN_FORM, SIGN_IN_FORM };
