import { IMAGES, ICONS } from '@/global/images'
import { theme } from '@/global/theme'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View, Image, Text, TextInput, Dimensions, StatusBar } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import Constants from 'expo-constants'

const { height } = Dimensions.get("screen");

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-white"
      style={{ height:height, backgroundColor: theme.bg,}}
    >
      <StatusBar backgroundColor={theme.bg} />
      <View className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
            className='bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4'
          >
            <ArrowLeftIcon size={20} color={"black"} />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Image source={IMAGES.login} style={{
            width: 200,
            height: 200
          }} />
        </View>

      </View>

      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50
        }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'
            value={"piguavejc@gmail.com"}
            placeholder='Enter Email'
          />
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'
            secureTextEntry={true}
            value={"Test: 12345"}
            placeholder='Enter Password'
          />
          <TouchableOpacity className='flex items-end' >
            <Text className='text-gray-700'>
              Forogot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className='py-3 bg-yellow-400 rounded-xl'
          >
            <Text className="font-xl font-bold text-center text-gray-700">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
          Or
        </Text>
        <View className='flex-row justify-center space-x-12'>
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              className='w-10 h-10'
              source={ICONS.google} />
          </TouchableOpacity>
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              className='w-10 h-10'
              source={ICONS.facebook} />
          </TouchableOpacity>
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              className='w-10 h-10'
              source={ICONS.apple} />
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-center mt-7'>
          <Text className="text-gray-500 font-semibold">Don't have a account?</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('SignUp')
          }}>
            <Text className="font-semibold text-yellow-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>


      </View>
    </View>
  )
}

export { LoginScreen }
