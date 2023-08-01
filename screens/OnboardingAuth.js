import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import PrimaryButtonOutline from '../components/PrimaryButtonOutline';
import AuthLayout from '../layouts/AuthLayout';
import AuthHeader from '../components/AuthHeader';

export default function OnboardingAuth({ navigation }) {
    const handleClickLogin = () => {
        navigation.navigate('Login');
    };

    const handleClickRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <AuthLayout>
            <View style={styles.container}>
                <AuthHeader title="Mediku" subtitle="Selamat datang di" />
                <Image
                    source={require('../assets/images/auth-onboarding.png')}
                    style={[styles.image, { resizeMode: 'contain' }]}
                />
                <View style={styles.footer}>
                    <PrimaryButton
                        onPress={handleClickRegister}
                        marginBottom={16}
                    >
                        Daftar
                    </PrimaryButton>
                    <PrimaryButtonOutline onPress={handleClickLogin}>
                        Masuk
                    </PrimaryButtonOutline>
                </View>
            </View>
        </AuthLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        flex: 0.8,
        justifyContent: 'center',
        marginBottom: 46,
    },
    footer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
