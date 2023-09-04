import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Menu({ image, title, onPress }) {
    return (
        <View
            style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={onPress}
        >
            <Image
                style={{ height: 80, width: '50%', marginBottom: 14 }}
                source={image}
            />
            <Text style={{ fontSize: 14, textAlign: 'center' }}>{title}</Text>
        </View>
    );
}
