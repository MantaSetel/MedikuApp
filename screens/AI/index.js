import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import PrimaryButtonOutline from '../../components/PrimaryButtonOutline';
import AILayout from '../../layouts/AILayout';
import AIHeader from '../../components/AIHeader';

export default function AI({ navigation }) {
    const handleClickSkin = () => {
        navigation.navigate('Skin');
    };
    const handleClickNail = () => {
        navigation.navigate('Nail');
    };

    return (
        <AILayout>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/ai/ai-onboarding.png')}
                    style={[styles.image, { resizeMode: 'contain' }]}
                />

                <View style={styles.footer}>
                    <PrimaryButton onPress={handleClickSkin} marginBottom={16}>
                        Deteksi lewat kulit
                    </PrimaryButton>
                    <PrimaryButtonOutline onPress={handleClickNail}>
                        Deteksi lewat kuku
                    </PrimaryButtonOutline>
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
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
