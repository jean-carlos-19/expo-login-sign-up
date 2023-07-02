import { BaseNavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, SignUpScreen, WelcomeSreen } from '@/views'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BaseNavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name='SignUp' component={SignUpScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Welcome' component={WelcomeSreen} />
      </Stack.Navigator>
    </BaseNavigationContainer>
  );
} 