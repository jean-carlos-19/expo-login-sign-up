import { BaseNavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, SignUpScreen, WelcomeSreen } from '@/views'
import {RootStackParamList} from '@/global/routes'

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <BaseNavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' >
        <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name='SignUp' component={SignUpScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Welcome' component={WelcomeSreen} />
      </Stack.Navigator>
    </BaseNavigationContainer>
  );
} 