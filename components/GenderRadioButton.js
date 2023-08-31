import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { COLORS } from '../constants';

const GenderRadioButton = ({ gender, setGender }) => {
    const handleGenderChange = (value) => {
        setGender(value);
    };

    return (
        <View style={styles.container}>
            <RadioButton.Group
                onValueChange={handleGenderChange}
                value={gender}
            >
                <View style={styles.radioButtonGroup}>
                    <View style={styles.radioButtonContainer}>
                        <RadioButton value="0" color={COLORS.primary} />
                        <Text style={styles.radioButtonLabel}>Laki Laki</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                        <RadioButton value="1" color={COLORS.primary} />
                        <Text style={styles.radioButtonLabel}>Perempuan</Text>
                    </View>
                </View>
            </RadioButton.Group>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    radioButtonGroup: {
        flexDirection: 'row', // Mengatur opsi radio button sejajar
        alignItems: 'center',
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    radioButtonLabel: {
        marginLeft: 10,
        fontSize: 16,
    },
});

export default GenderRadioButton;
