import { Image, View } from 'react-native';
import React from 'react';

export default function BlurObject() {
    return (
        <View
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                zIndex: -1,
            }}
        >
            <Image
                style={{ height: 300 }}
                source={require('../../assets/images/blur-object.png')}
            />
        </View>
    );
}
