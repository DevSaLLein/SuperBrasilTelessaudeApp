import React, { Children } from 'react';
import { View, Text, TextInput, } from 'react-native';

type Props = {
    title: string;
    children: React.ReactNode;
    description: string;
}

export default function InputPerson({ title, children, description }: Props) {
    return (
        <View>
            <Text className='text-lg mb-2'>{title}</Text>
            <View className='w-full h-14 justify-center border rounded-lg border-gray-400'>
                <View style={{ backgroundColor: 'rgba(66, 175, 175, 0.15)' }} className=' p-2 m-1 absolute -z-10 rounded-md'>
                    {children}
                </View>
                <TextInput placeholder={description} className='ml-16' />
            </View>
        </View>
    );
}
