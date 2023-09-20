import { useState } from 'react';
import { LoginModel } from '@/models';
import { LoginValidation } from '@/validations';

const useLogin = () => {
 const [entity] = useState<LoginModel>({
  email: undefined,
  password: undefined,
 });
 return { entity, LoginValidation };
};
export { useLogin };
