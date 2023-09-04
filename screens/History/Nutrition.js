import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ProgressBar } from 'react-native-paper';
import { COLORS } from '../../constants';

const Nutrition = ({ name, max, current }) => {
    const progress = current / max;

    const getColorByProgress = () => {
        if (progress < 0.3) {
            return COLORS.danger;
        } else if (progress < 0.6) {
            return COLORS.warning;
        } else {
            return COLORS.success;
        }
    };

    const barColor = getColorByProgress();

    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.unit}>
                    {current}g / {max}g
                </Text>
            </View>
            <ProgressBar progress={progress} color={barColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
    },
    unit: {
        fontSize: 12,
    },
});

export default Nutrition;
