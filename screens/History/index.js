import { Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../../constants';
import HistoryCard from './HistoryCard';
import BlurObject from '../../components/svg/BlurObject';
import FetchAdapter from '../../use-cases/FetchAdapter';

const History = ({ navigation }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleShowDetail = (id) => {
        navigation.navigate('HistoryDetail', { id });
    };

    const getMalnutritionResults = async () => {
        console.log('called function');
        try {
            setLoading(true);
            const response = await FetchAdapter.get('malnutrition-results');
            setResults(response.data);
        } catch (error) {
            console.log('ini error', error);
        }
        setLoading(true);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getMalnutritionResults();
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <BlurObject />
            <Text style={styles.title}>Hasil Prediksi</Text>
            <Text style={styles.subtitle}>
                Lihat history yang disimpan dari hasil prediksi
            </Text>

            {loading ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {results.map((result) => (
                        <HistoryCard
                            key={result.id}
                            handleShowDetail={handleShowDetail}
                            isMalnutrition={result.isMalnutrition}
                            id={result.id}
                            date={result.date}
                        />
                    ))}
                </ScrollView>
            ) : (
                <Text>Loading...</Text>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 20,
        paddingTop: 35,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '400',
        color: COLORS.gray,
        marginTop: 8,
        marginBottom: 20,
    },
});

export default History;
