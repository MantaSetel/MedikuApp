import { View, StyleSheet } from 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { COLORS } from '../constants';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                animating={true}
                color={COLORS.primary}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loader;
