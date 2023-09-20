import { useState } from 'react';
import { SingIngModel } from '@/models';
import { SignInVaalidation } from '@/validations';

const useSingIn = () => {
 const [entity] = useState<SingIngModel>({
  email: undefined,
  fullName: undefined,
  password: undefined,
 });
 return { entity, SignInVaalidation };
};
export { useSingIn };
