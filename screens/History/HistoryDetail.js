import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../components/PrimaryButton';
import Nutrition from './Nutrition';
import StatusCard from './StatusCard';
import FetchAdapter from '../../use-cases/FetchAdapter';
import { ActivityIndicator } from 'react-native-paper';
import Loader from '../../components/Loader';

const HistoryDetail = ({ route, navigation }) => {
    const { id } = route.params;
    const [dailyDetections, setDailyDetections] = useState([]);
    const [malnutritionResult, setMalnutritionResult] = useState({});
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        try {
            const response = await FetchAdapter.get(
                `malnutrition-results/${id}/daily-detects`
            );
            setDailyDetections(response.data.nutrition);
            setMalnutritionResult(response.data.malnutritionResult);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    const handlePredict = () => {
        console.log(
            '----------------upload-----------------',
            malnutritionResult.id
        );
        return navigation.navigate('AICamera', {
            malnutritionResultId: malnutritionResult.id,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <Loader />
            ) : (
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.title}>Nutrisi Harian</Text>
                    <Text style={styles.subtitle}>
                        Lihat history yang disimpan dari hasil prediksi
                    </Text>
                    <StatusCard
                        isMalnutrition={malnutritionResult.isMalnutrition}
                    />
                    <View>
                        <Text style={styles.titleList}>
                            Kebutuhan harian untuk anak usia 10 bulan
                        </Text>
                        <View>
                            {dailyDetections.map((item, index) => (
                                <Nutrition
                                    key={index}
                                    max={item.standard}
                                    current={item.total}
                                    name={item.name}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            )}
            <View style={styles.btnDetectionWrapper}>
                <PrimaryButton
                    onPress={handlePredict}
                    style={styles.btnDetection}
                >
                    Deteksi Nutrisi
                </PrimaryButton>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
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
    titleList: {
        fontSize: 16,
        color: COLORS.gray,
        marginTop: 8,
        marginBottom: 20,
    },
    btnDetectionWrapper: {
        position: 'absolute',
        bottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
    },
});

export default HistoryDetail;
