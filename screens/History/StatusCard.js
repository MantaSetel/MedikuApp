import { View, Text, Image } from 'react-native';
import { COLORS } from '../../constants';
import React from 'react';

const StatusCard = ({ isMalnutrition }) => {
    const title = isMalnutrition
        ? 'Anak anda kurang gizi'
        : `Selamat,\nAnak anda Sehat !!!`;

    const color = isMalnutrition ? COLORS.warning : COLORS.success;

    const subtitle = isMalnutrition
        ? 'Beri makan makanan bernutrisi'
        : 'Penuhi kebutuhan harian agar tetap sehat';

    const sourceImage = isMalnutrition
        ? require('../../assets/images/malnutrition-results/malnutrition.png')
        : require('../../assets/images/malnutrition-results/health.png');

    return (
        <View
            elevation={4}
            style={{
                marginTop: 25,
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
                backgroundColor: color, // Add a background color for elevation to work on Android
                position: 'relative',
                justifyContent: 'center',
                marginBottom: 25,
            }}
        >
            <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 600 }}>
                {title}
            </Text>
            <Text style={{ color: '#FFF', fontSize: 13, marginTop: 8 }}>
                {subtitle}
            </Text>
            <View
                style={{
                    position: 'absolute',
                    right: 15,
                    width: 82,
                    top: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image
                    style={{
                        width: '100%',
                        height: '80%',
                    }}
                    source={sourceImage}
                />
            </View>
        </View>
    );
};

export default StatusCard;
