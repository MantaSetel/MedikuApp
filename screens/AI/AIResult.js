import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../constants';
import PrimaryButton from '../../components/PrimaryButton';
import PrimaryButtonOutline from '../../components/PrimaryButtonOutline';
import FetchAdapter from '../../use-cases/FetchAdapter';

const AIResult = ({ route, navigation }) => {
    const [loading, setLoading] = useState(false);
    const { photoUri, results, malnutritionResultId } = route.params;
    const handleBack = () => {
        if (malnutritionResultId) {
            return navigation.navigate('HistoryDetail', {
                id: malnutritionResultId,
            });
        }
        return navigation.navigate('AI');
    };

    const handleSave = async () => {
        setLoading(true);
        await FetchAdapter.put(
            `food-nutrition/results/${results.newDetectionDaily.id}`,
            {
                isSaved: true,
            }
        );
        setLoading(false);
        return navigation.navigate('History');
    };

    console.log(results.nutrition);

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={{ uri: photoUri }}
                    style={{ width: '100%', height: '100%' }}
                />
            </View>
            <Text>{results.food.name}</Text>
            <View style={styles.detailWrapper}>
                <Text style={styles.title}>Nutrisi dalam makanan ini:</Text>
            </View>
            <View style={styles.detailWrapper}>
                <Text style={styles.name}>Kalsium</Text>
                <Text style={styles.unit}>{results.nutrition.calcium} g</Text>
            </View>
            <View style={styles.detailWrapper}>
                <Text style={styles.name}>Kalori</Text>
                <Text style={styles.unit}>{results.nutrition.calorie} g</Text>
            </View>
            <View style={styles.detailWrapper}>
                <Text style={styles.name}>Karbohidrat</Text>
                <Text style={styles.unit}>
                    {results.nutrition.carbohydrate} g
                </Text>
            </View>
            <View style={styles.detailWrapper}>
                <Text style={styles.name}>Protein</Text>
                <Text style={styles.unit}>{results.nutrition.protein} g</Text>
            </View>
            <View style={styles.detailWrapper}>
                <Text style={styles.name}>Lemak</Text>
                <Text style={styles.unit}>{results.nutrition.fat} g</Text>
            </View>
            <View style={styles.footer}>
                <PrimaryButtonOutline style={styles.btn} onPress={handleBack}>
                    Kembali
                </PrimaryButtonOutline>
                <PrimaryButton
                    loading={loading}
                    style={styles.btn}
                    onPress={handleSave}
                >
                    Simpan
                </PrimaryButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        width: 300,
        height: 300,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
    },
    detailWrapper: {
        width: 300,
        height: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        fontSize: 16,
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 17,
        color: '#36454F',
    },
    unit: {
        fontSize: 17,
        color: '#36454F',
    },
    btn: {
        width: '48%',
    },
    footer: {
        width: 300,
        height: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 50,
    },
});

export default AIResult;
