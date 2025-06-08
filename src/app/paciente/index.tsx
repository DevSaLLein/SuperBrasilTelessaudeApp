import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import InputPerson from '@/src/components/InputPerson';
import ButtonPerson from '@/src/components/ButtonPerson';

export default function LoginPacienteScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 px-4">
      <TouchableOpacity className="w-7 h-7 mt-16 mb-4" onPress={() => router.back()}>
        <AntDesign name="left" size={25} />
      </TouchableOpacity>

      <View className="items-center mb-6">
        <Image source={require('../../assets/images/loginPersonImage.png')} />
      </View>

      <View className="flex-1 justify-start">

        <Text className="text-3xl font-bold mb-1">Bem-Vindo(a)!</Text>
        <Text className="text-lg text-gray-400 mb-6">
          Faça login para agendar sua consulta online
        </Text>


        <View className="gap-4 mb-8">
          <InputPerson title="Seu e-mail" description="Digite seu e-mail">
            <MaterialCommunityIcons name="email" size={24} color={'#42AFAF'} />
          </InputPerson>

          <InputPerson title="Sua senha" description="Digite sua senha">
            <MaterialCommunityIcons name="lock" size={24} color={'#42AFAF'} />
          </InputPerson>
        </View>


        <View className="flex-row items-center mb-6">
          <Text className="font-semibold mr-2">Primeira vez aqui?</Text>
          <TouchableOpacity>
            <Text className="text-primary font-semibold underline">
              Cadastre-se como paciente!
            </Text>
          </TouchableOpacity>
        </View>

        <ButtonPerson title="Entrar como paciente" />
      </View>
    </View>
  );
}
