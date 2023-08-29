import {
    Image,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';
import { StatusBar } from 'expo-status-bar';

export default function Profile() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <StatusBar />
            <View style={{ width: '100%' }}>
                <Image
                    source={require('../../assets/images/profil/cover.jpg')}
                    resizeMode="cover"
                    style={{
                        height: 228,
                        width: '100%',
                    }}
                />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/profil/wibu.png')}
                    resizeMode="contain"
                    style={{
                        height: 155,
                        width: 155,
                        borderRadius: 999,
                        borderWidth: 2,
                        marginTop: -90,
                    }}
                />

                <Text
                    style={{
                        marginVertical: 8,
                    }}
                >
                    Uzumaki Naruto
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginVertical: 6,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ marginLeft: 4 }}>
                        Konohagakure, Fire Nation
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            width: 124,
                            height: 36,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                        }}
                    >
                        <Text>Edit Profil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
