import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from 'react-native';

import { COLORS } from '../constants';

const OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>
            <Image
                source={item.image}
                style={[styles.image, { width, resizeMode: 'contain' }]}
            />
            <View style={{ flex: 0.3, marginTop: 20 }}>
                <Text style={styles.title}>{item.title}</Text>
                {item.description ? (
                    <Text style={styles.description}>{item.description}</Text>
                ) : null}
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
    image: {
        flex: 0.6,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: COLORS.primary,
        textAlign: 'center',
        lineHeight: 42,
    },
    description: {
        fontWeight: '300',
        color: COLORS.secondary,
        textAlign: 'center',
        paddingHorizontal: 64,
        lineHeight: 26,
    },
});

export default OnboardingItem;
