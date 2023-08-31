import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { API_URL, COLORS } from '../../constants';
import TextField from '../../components/TextField';
import PrimaryButton from '../../components/PrimaryButton';
import GenderRadioButton from '../../components/GenderRadioButton';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dialog, Portal, Provider } from 'react-native-paper';

const MalnutritionPrediction = ({ navigation }) => {
    const [gender, setGender] = useState(null);
    const [agePerMonth, setAgePerMonth] = useState(null);
    const [birthWeight, setBirthWeight] = useState(null);
    const [birthHeight, setBirthHeight] = useState(null);
    const [bodyWeight, setBodyWeight] = useState(null);
    const [bodyHeight, setBodyHeight] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const { accessToken, refreshToken } = useContext(AuthContext);

    useEffect(() => {
        if (showDialog === true) {
            setTimeout(() => {
                setShowDialog(false);
            }, 3000);
        }
    }, [showDialog === true]);

    const getPrediction = async () => {
        const result = await axios.post(
            `${API_URL}/malnutrition`,
            {
                gender,
                agePerMonth,
                birthWeight,
                birthHeight,
                bodyWeight,
                bodyHeight,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'x-refresh': refreshToken,
                },
            }
        );
        return result.data;
    };

    const handlePredict = async () => {
        try {
            setLoading(true);
            const result = await getPrediction();
            setLoading(false);

            return navigation.navigate('MalNutritionResult', {
                result: result.data,
            });
        } catch (error) {
            setLoading(false);
            setShowDialog(true);
        }
    };

    const hideDialog = () => setShowDialog(false);

    return (
        <Provider>
            <SafeAreaView style={styles.container}>
                <Portal>
                    <Dialog
                        visible={showDialog}
                        style={styles.dialog}
                        dismissable={true}
                        onDismiss={hideDialog}
                    >
                        <Dialog.Title>Error</Dialog.Title>
                        <Dialog.Content>
                            <Text variant="bodyMedium">
                                Data yang anda masukan harus lengkap
                            </Text>
                        </Dialog.Content>
                    </Dialog>
                </Portal>
                <Text style={styles.title}>Lakukan Prediksi Malnutrisi</Text>
                <Text style={styles.subtitle}>
                    Masukkan data anak berdasarkan form yang ada
                </Text>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.label}>Jenis Kelamin</Text>
                        <GenderRadioButton
                            gender={gender}
                            setGender={setGender}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextField
                            keyboardType="numeric"
                            error=""
                            value={agePerMonth}
                            onChangeText={(agePerMonth) =>
                                setAgePerMonth(agePerMonth)
                            }
                            label="Umur Bulan"
                            placeholder="Masukkan Umur Bulan"
                        />
                        <View style={styles.inputLabelAfterWrapper}>
                            <Text style={styles.inputLabelAfterText}>
                                bulan
                            </Text>
                        </View>
                    </View>
                    <View style={styles.input}>
                        <TextField
                            keyboardType="numeric"
                            error=""
                            value={birthWeight}
                            onChangeText={(birthWeight) =>
                                setBirthWeight(birthWeight)
                            }
                            label="Berat Lahir"
                            placeholder="Masukkan Berat Lahir"
                        />
                        <View style={styles.inputLabelAfterWrapper}>
                            <Text style={styles.inputLabelAfterText}>kg</Text>
                        </View>
                    </View>
                    <View style={styles.input}>
                        <TextField
                            keyboardType="numeric"
                            error=""
                            value={birthHeight}
                            onChangeText={(birthHeight) =>
                                setBirthHeight(birthHeight)
                            }
                            label="Tinggi Lahir"
                            placeholder="Masukkan Tinggi Lahir"
                        />
                        <View style={styles.inputLabelAfterWrapper}>
                            <Text style={styles.inputLabelAfterText}>cm</Text>
                        </View>
                    </View>
                    <View style={styles.input}>
                        <TextField
                            keyboardType="numeric"
                            error=""
                            value={bodyWeight}
                            onChangeText={(bodyWeight) =>
                                setBodyWeight(bodyWeight)
                            }
                            label="Berat Sekarang"
                            placeholder="Masukkan Berat Sekarang"
                        />
                        <View style={styles.inputLabelAfterWrapper}>
                            <Text style={styles.inputLabelAfterText}>kg</Text>
                        </View>
                    </View>
                    <View style={styles.input}>
                        <TextField
                            keyboardType="numeric"
                            error=""
                            value={bodyHeight}
                            onChangeText={(bodyHeight) =>
                                setBodyHeight(bodyHeight)
                            }
                            label="Tinggi Sekarang"
                            placeholder="Masukkan Tinggi Sekarang"
                        />
                        <View style={styles.inputLabelAfterWrapper}>
                            <Text style={styles.inputLabelAfterText}>cm</Text>
                        </View>
                    </View>
                    <PrimaryButton
                        loading={loading}
                        onPress={handlePredict}
                        style={styles.submitButton}
                    >
                        Submit
                    </PrimaryButton>
                </View>
            </SafeAreaView>
        </Provider>
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
    label: {
        fontSize: 16,
        fontWeight: '400',
        color: COLORS.secondary,
    },
    input: {
        marginBottom: 10,
        position: 'relative',
    },
    submitButton: {
        width: '100%',
        marginTop: 20,
        marginBottom: 200,
    },
    inputLabelAfterWrapper: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    inputLabelAfterText: {
        fontSize: 16,
        fontWeight: '400',
        color: COLORS.secondary,
        alignSelf: 'center',
    },
    dialog: {
        backgroundColor: COLORS.background,
        paddingVertical: 20,
    },
});

export default MalnutritionPrediction;
