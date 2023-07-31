import { View, Text } from 'react-native';
import React from 'react';

export default function TextTitle({ children, style }) {
    return (
        <View>
            <Text
                style={{
                    fontSize: 28,
                    lineHeight: 42,
                    fontWeight: 'bold',
                    ...style,
                }}
            >
                {children}
            </Text>
        </View>
    );
}
