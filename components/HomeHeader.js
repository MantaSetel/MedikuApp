import { View, Text } from 'react-native';
import React from 'react';

export default function HomeHeader({ name }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
            }}
        >
            <View>
                <Text style={{ fontSize: 28, fontWeight: 700 }}>Halo,</Text>
                <Text style={{ fontSize: 28 }}>{name}</Text>
            </View>
            <Text style={{ fontSize: 14, fontWeight: 600 }}>#WargaSehat</Text>
        </View>
    );
}
