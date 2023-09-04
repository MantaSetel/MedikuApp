import { View, Text, Image } from 'react-native';
import React from 'react';
import PrimaryButton from './PrimaryButton';

export default function CardHome({ handleToMalnutrition }) {
    return (
        <View
            elevation={4}
            style={{
                marginTop: 33,
                height: 136,
                width: '100%',
                padding: 20,
                borderRadius: 10,
                shadowColor: 'rgba(0,0,0,0.6)',
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowRadius: 16,
                elevation: 8, // This is for Android
                backgroundColor: '#FFF', // Add a background color for elevation to work on Android
                position: 'relative',
            }}
        >
            <Text style={{ fontSize: 16, fontWeight: 600 }}>
                Khawatir makanan anak anda?
            </Text>
            <PrimaryButton
                onPress={handleToMalnutrition}
                labelStyle={{
                    fontSize: 12,
                    lineHeight: 15,
                }}
                contentStyle={{
                    paddingVertical: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                width={158}
                height={35}
                marginTop={22}
                icon="camera"
            >
                Cek Sekarang
            </PrimaryButton>
            <Image
                style={{
                    position: 'absolute',
                    top: 15,
                    right: 15,
                    width: 64,
                    height: 16,
                }}
                source={require('../assets/icons/logo.png')}
            />
            <Image
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 15,
                    width: 82,
                    height: 102,
                }}
                source={require('../assets/pregnancy.png')}
            />
        </View>
    );
}
