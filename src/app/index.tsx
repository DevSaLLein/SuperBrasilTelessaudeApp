import { router } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

export default function SplashScreen() {

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.replace('/Onboarding')
        }, 3000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <View className='w-full h-full items-center justify-center'>
            <Image
                source={require("../assets/images/bg-splashScreen.png")}
                className="absolute inset-0 w-full h-full"
                resizeMode="cover"
            />
            <View className='flex-row items-center gap-1 absolute'>
                <Image source={require("../assets/images/logo-Super-Brasil-Telessaude.png")} className='w-20 h-20' resizeMode='contain'/>
                <View>
                    <Text className='font-extrabold text-white text-lg'>Super Brasil</Text>
                    <Text className='font-extrabold text-white text-lg'>Telessaúde</Text>
                </View>
            </View>
        </View>
    );
}
