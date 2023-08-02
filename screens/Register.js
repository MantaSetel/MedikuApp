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
import AuthLayout from '../layouts/AuthLayout';
import AuthHeader from '../components/AuthHeader';
import { API_URL, COLORS } from '../constants';
import axios from 'axios';
import TextField from '../components/TextField';
import { TextInput } from 'react-native-paper';

export default function Register({ navigation }) {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, isLoading] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);

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

    const handleSubmit = async () => {
        isLoading(true);
        try {
            console.log(`${API_URL}/users`);
            const res = await axios.post(`${API_URL}/users`, {
                name,
                email,
                password,
            });
            if (res.data) {
                console.log(res.data);
                navigation.navigate('Login');
            }
        } catch (error) {
            if (error.response) {
                if (
                    error.response.status === 409 ||
                    error.response.status === 400
                ) {
                    setErrors(error.response.data.errors);
                }
            }
        }
        isLoading(false);
    };

    return (
        <AuthLayout>
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <AuthHeader title="Daftar" subtitle="Halo #WargaSehat" />
                    {!isKeyboardVisible && (
                        <Image
                            source={require('../assets/images/register.png')}
                            style={[styles.image, { resizeMode: 'contain' }]}
                        />
                    )}
                    <View style={styles.containerInput}>
                        <View style={{ marginBottom: 8, width: 320 }}>
                            <TextField
                                error={errors.name}
                                value={name}
                                onChangeText={(name) => setName(name)}
                                label="Nama Lengkap"
                                placeholder="Masukkan nama lengkap"
                            />
                        </View>
                        <View style={{ marginBottom: 8, width: 320 }}>
                            <TextField
                                error={errors.email}
                                value={email}
                                onChangeText={(email) => setEmail(email)}
                                label="Email"
                                placeholder="Masukkan email"
                            />
                        </View>
                        <View style={{ marginBottom: 8, width: 320 }}>
                            <TextField
                                label="Password"
                                placeholder="Masukkan password"
                                error={errors.password}
                                value={password}
                                onChangeText={(password) =>
                                    setPassword(password)
                                }
                                secureTextEntry={secureTextEntry}
                                right={
                                    <TextInput.Icon
                                        name={
                                            secureTextEntry ? 'eye-off' : 'eye'
                                        }
                                        icon={
                                            secureTextEntry ? 'eye-off' : 'eye'
                                        }
                                        onPress={() => {
                                            setSecureTextEntry(
                                                !secureTextEntry
                                            );
                                            return false;
                                        }}
                                        marginTop={6}
                                    />
                                }
                            />
                        </View>
                        <PrimaryButton
                            style={{ marginTop: 10 }}
                            onPress={handleSubmit}
                            loading={loading}
                        >
                            Daftar
                        </PrimaryButton>
                    </View>
                    <View style={styles.footer}>
                        <Text style={{ color: COLORS.primary_2, fontSize: 14 }}>
                            Sudah mempunyai akun?{' '}
                            <Text
                                style={{
                                    color: COLORS.primary,
                                    fontWeight: 'bold',
                                }}
                                onPress={() => navigation.navigate('Login')}
                            >
                                Login
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
        flex: 0.8,
        justifyContent: 'center',
        width: 320,
        marginBottom: 12,
    },
    containerInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 0.1,
        paddingTop: 16,
        alignItems: 'center',
    },
});
