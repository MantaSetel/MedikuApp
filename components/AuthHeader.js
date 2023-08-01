import { StyleSheet, View } from 'react-native';
import React from 'react';
import TextTitle from './TextTitle';

export default function AuthHeader({ title, subtitle, style }) {
    return (
        <View style={{ ...styles.container, ...style }}>
            <TextTitle style={{ fontSize: 20, lineHeight: 26 }}>
                {subtitle}
            </TextTitle>
            <TextTitle>{title}</TextTitle>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
