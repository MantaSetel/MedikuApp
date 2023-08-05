import { View, Text } from 'react-native';
import React from 'react';

export default function HomeHeader() {
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
                <Text style={{ fontSize: 28 }}>Juan Angela Alma</Text>
            </View>
            <Text style={{ fontSize: 14, fontWeight: 600 }}>#WargaSehat</Text>
        </View>
    );
}
