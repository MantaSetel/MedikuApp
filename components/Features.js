import { View, Text } from 'react-native';
import React from 'react';
import Menu from './Menu';

export default function Features() {
    return (
        <View
            style={{
                marginTop: 33,
                height: 136,
                width: '100%',
            }}
        >
            <Text style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
                Fitur
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'space-between',
                }}
            >
                <Menu
                    image={require('../assets/images/menu/nail.png')}
                    title="Diagnosa Kuku"
                />
                <Menu
                    image={require('../assets/images/menu/skin.png')}
                    title="Diagnosa Kulit"
                />
                <Menu
                    image={require('../assets/images/menu/chat.png')}
                    title="Sahabat Kesehatan"
                />
                <Menu
                    image={require('../assets/images/menu/location.png')}
                    title="Layanan Terdekat"
                />
            </View>
        </View>
    );
}
