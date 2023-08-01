import React, { useEffect, useState } from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import PrimaryButtonOutline from '../components/PrimaryButtonOutline';
import AuthLayout from '../layouts/AuthLayout';
import AuthHeader from '../components/AuthHeader';
import { TextInput } from 'react-native-paper';
import { COLORS } from '../constants';

export default function Login({ navigation }) {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setKeyboardVisible(true)
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => setKeyboardVisible(false)
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <AuthLayout>
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <AuthHeader title="Mediku" subtitle="Selamat datang di" />
                    {!isKeyboardVisible && (
                        <Image
                            source={require('../assets/images/login.png')}
                            style={[styles.image, { resizeMode: 'contain' }]}
                        />
                    )}
                    <View style={styles.containerInput}>
                        <TextInput
                            style={{
                                height: 56,
                                justifyContent: 'center',
                                marginBottom: 16,
                            }}
                            mode="outlined"
                            label="Email"
                            placeholder="Type something"
                            width={320}
                            name="email"
                            outlineColor="#EDECF4"
                            underlineColor="#EDECF4"
                            selectionColor="#EDECF4"
                            activeOutlineColor={COLORS.primary}
                            outlineStyle={{
                                borderRadius: 8,
                            }}
                            contentStyle={{
                                justifyContent: 'center',
                            }}
                            textColor={COLORS.primary}
                        />
                        <TextInput
                            style={{
                                height: 56,
                                justifyContent: 'center',
                                marginBottom: 16,
                            }}
                            mode="outlined"
                            label="Password"
                            placeholder="Type something"
                            width={320}
                            name="email"
                            outlineColor="#EDECF4"
                            underlineColor="#EDECF4"
                            selectionColor="#EDECF4"
                            activeOutlineColor={COLORS.primary}
                            outlineStyle={{
                                borderRadius: 8,
                            }}
                            contentStyle={{
                                justifyContent: 'center',
                            }}
                            textColor={COLORS.primary}
                        />
                        <PrimaryButton style={{}}>Masuk</PrimaryButton>
                    </View>
                    <View style={styles.footer}>
                        <Text style={{ color: COLORS.primary_2, fontSize: 14 }}>
                            Sudah mempunyai akun?{' '}
                            <Text style={{ color: COLORS.primary }}>
                                Daftar
                            </Text>
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </AuthLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: 320,
    },
    containerInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 0.1,
        alignItems: 'center',
    },
});
