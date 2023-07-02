import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from '@/views'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}}name='Home' component={HomeScreen} />
    </Stack.Navigator>
  );
}