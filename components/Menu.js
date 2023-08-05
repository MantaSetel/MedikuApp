import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Menu({ image, title }) {
    return (
        <View
            style={{
                width: 57,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image style={{ height: 50, marginBottom: 14 }} source={image} />
            <Text style={{ fontSize: 10, textAlign: 'center' }}>{title}</Text>
        </View>
    );
}
