import { Image, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import AILayout from '../../layouts/AILayout';

export default function AI({ navigation }) {
    const handleClickButton = () => {
        navigation.navigate('AICamera');
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {});

        return unsubscribe;
    }, [navigation]);

    return (
        <AILayout>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/ai/ai-onboarding.png')}
                    style={[styles.image, { resizeMode: 'contain' }]}
                />

                <View style={styles.footer}>
                    <PrimaryButton
                        onPress={handleClickButton}
                        marginBottom={16}
                    >
                        Deteksi Nutrisi
                    </PrimaryButton>
                </View>
            </View>
        </AILayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        flex: 0.5,
        justifyContent: 'center',
        marginBottom: 46,
    },
    footer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
