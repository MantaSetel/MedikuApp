import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import { COLORS } from '../../constants';
import FetchAdapter from '../../use-cases/FetchAdapter';

const MalNutritionPredictionResult = ({ route, navigation }) => {
    const [loading, setLoading] = useState(false);
    const { result } = route.params;

    const healthMessage = 'Anak anda tergolong sehat';
    const malnutritionMessage = 'Anak anda tergolong kurang gizi';
    const healthImage = require('../../assets/images/malnutrition-results/health.png');
    const malnutritionImage = require('../../assets/images/malnutrition-results/malnutrition.png');

    const title = result.isMalnutrition ? malnutritionMessage : healthMessage;
    const image = result.isMalnutrition ? malnutritionImage : healthImage;

    const color = result.isMalnutrition ? COLORS.warning : COLORS.success;

    const handleSaveResult = async () => {
        setLoading(true);
        try {
            const response = await FetchAdapter.put(
                `malnutrition-results/${result.id}`,
                {
                    isSaved: true,
                }
            );
            setLoading(false);
            if (response.success) {
                return navigation.navigate('History');
            }
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text style={styles.header}>Hasil Prediksi</Text>
            <Image source={image} style={styles.image} />
            <Text style={[styles.title, { color }]}>{title}</Text>
            <View style={styles.buttonWrapper}>
                <PrimaryButton loading={loading} onPress={handleSaveResult}>
                    Simpan Hasil
                </PrimaryButton>
                <Text style={styles.note}>
                    Simpan hasil agar mendapatkan analitik harian
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D386E',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginHorizontal: 20,
        lineHeight: 40,
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    note: {
        fontSize: 14,
        color: COLORS.gray,
        marginTop: 10,
        marginLeft: 5,
    },
    buttonWrapper: {
        alignItems: 'flex-start',
        marginTop: 20,
    },
});

export default MalNutritionPredictionResult;
