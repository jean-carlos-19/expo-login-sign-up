import { object, string } from 'yup';

const LoginValidation = object({
 email: string(),
 password: string(),
});
const SignInVaalidation = object({
 fullName: string(),
 email: string(),
 password: string(),
});
export { LoginValidation, SignInVaalidation };
