import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { getDataStorage } from '../utils/storage.utils';

export default function Home() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Hello world</Text>
        </View>
    );
}
