import React from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
  className?: string;
  image: any;
  isSelected?: boolean;
};

export default function ButtonChoice({ title, className, image, isSelected, ...rest }: Props) {
  const buttonStyle = isSelected
    ? 'bg-primary border-primary'
    : 'bg-white border-primary';

  const textStyle = isSelected ? 'text-white' : 'text-primary';

  return (
    <TouchableOpacity
      className={`items-center justify-center border-2 w-40 h-40 rounded-xl ${buttonStyle}`}
      {...rest}
    >
      <Image className="w-24 h-24 mb-2" source={image} />
      <Text className={`text-center font-semibold text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
