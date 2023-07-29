import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

export default function Paginator({ data, scrollX }) {
    const width = useWindowDimensions().width;

    return (
        <View style={{ flexDirection: 'row', height: 10 }}>
            {data.map((_, i) => {
                const inputRange = [
                    (i - 1) * width,
                    i * width,
                    (i + 1) * width,
                ];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        key={i.toString()}
                        style={[styles.dot, { width: dotWidth, opacity }]}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        marginHorizontal: 8,
    },
});
