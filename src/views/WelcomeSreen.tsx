import React from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import { theme } from '@/global/theme'
import { IMAGES } from '@/global/images'
import { useNavigation } from '@react-navigation/native'


const WelcomeSreen = () => {
  const navigation = useNavigation();
  return (
    <View
      className='flex-1'
      style={{ backgroundColor: theme.bg }}
    >
      <StatusBar backgroundColor={theme.bg} />
      <View className="flex-1 flex justify-around">

        <Text className="text-white font-bold text-4xl text-center">
          Let's Get Started!
        </Text>

        <View className="flex-row justify-center">
          <Image
            style={{ width: 350, height: 350 }}
            source={IMAGES.welcome} />
        </View>

        <View className="space-y-4">
          <TouchableOpacity
            className='py-3 bg-yellow-400 mx-7 rounded-xl'
            onPress={() => {
              navigation.navigate('SignUp')
            }}
          >
            <Text
              className='text-xl font-bold text-center text-gray-700'
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className='flex-row justify-center'>
            <Text className="text-white font-semibold">Already have a account?</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Login')
            }}>
              <Text className="font-semibold text-yellow-400"> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  )
}

export { WelcomeSreen }