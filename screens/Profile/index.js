import { Image, View, Text, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import { COLORS } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import PrimaryButtonOutline from '../../components/PrimaryButtonOutline';
import AuthContext from '../../context/AuthContext';

export default function Profile({ navigation }) {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = async () => {
        await logout();
        navigation.navigate('Login');
    };

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
                    style={styles.coverImage}
                />
            </View>
            <View style={styles.profileContainer}>
                <View>
                    <Image
                        source={require('../../assets/images/profil/wibu.png')}
                        resizeMode="contain"
                        style={styles.profileImage}
                    />
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
                <PrimaryButtonOutline
                    labelStyle={{ color: COLORS.danger, fontSize: 18 }}
                    style={{
                        marginBottom: 120,
                        borderColor: COLORS.danger,
                        borderWidth: 2,
                    }}
                    onPress={handleLogout}
                >
                    Logout
                </PrimaryButtonOutline>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    coverImage: {
        height: 228,
        width: '100%',
    },
    profileImage: {
        height: 155,
        width: 155,
        borderRadius: 999,
        borderWidth: 2,
        marginTop: -90,
    },
    name: {
        marginVertical: 8,
        fontSize: 24,
        color: COLORS.primary,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    email: {
        marginVertical: 8,
        fontSize: 12,
        color: COLORS.gray,
        textAlign: 'center',
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
});
