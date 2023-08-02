import React, { useContext, useEffect, useState } from 'react';
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
import { TextInput } from 'react-native-paper';
import { API_URL, COLORS } from '../constants';
import TextField from '../components/TextField';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

export default function Login({ navigation }) {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, isLoading] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const { login } = useContext(AuthContext);

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
            const res = await axios.post(`${API_URL}/sessions`, {
                email,
                password,
            });
            if (res.status === 201) {
                const accessToken = res.data.data.accessToken;
                const refreshToken = res.data.data.refreshToken;
                await login(accessToken, refreshToken);
                setErrors({});
                navigation.navigate('Home');
            }
        } catch (error) {
            console.log('error', error.response.data);
            if (error.response) {
                if (error.response.status === 400) {
                    setErrors(error.response.data.errors);
                } else if (error.response.status === 401) {
                    setErrors({ email: 'Email atau password salah' });
                }
            } else {
                console.log(error);
            }
        }
        isLoading(false);
    };

    return (
        <AuthLayout>
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <AuthHeader
                        title="Masuk"
                        subtitle="Ayo mulai hidup sehat"
                    />
                    {!isKeyboardVisible && (
                        <Image
                            source={require('../assets/images/login.png')}
                            style={[styles.image, { resizeMode: 'contain' }]}
                        />
                    )}
                    <View style={styles.containerInput}>
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
                            onPress={handleSubmit}
                            style={{ marginTop: 10 }}
                            loading={loading}
                        >
                            Masuk
                        </PrimaryButton>
                    </View>
                    <View style={styles.footer}>
                        <Text style={{ color: COLORS.primary_2, fontSize: 14 }}>
                            Belum mempunyai akun?{' '}
                            <Text
                                style={{
                                    color: COLORS.primary,
                                    fontWeight: 'bold',
                                }}
                                onPress={() => navigation.navigate('Register')}
                            >
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
        flex: 0.8,
        justifyContent: 'center',
        width: 320,
    },
    containerInput: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 0.1,
        alignItems: 'center',
    },
});
