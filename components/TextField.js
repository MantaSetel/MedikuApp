import { Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import { TextInput } from 'react-native-paper';

export default function TextField({ error, ...rest }) {
    return (
        <View style={{ width: '100%' }}>
            <TextInput
                style={{
                    height: 56,
                    backgroundColor: COLORS.background,
                    justifyContent: 'center',
                }}
                mode="outlined"
                outlineColor={error ? '#CC0019' : COLORS.primary}
                underlineColor={error ? '#CC0019' : COLORS.primary}
                selectionColor={error ? '#CC0019' : COLORS.primary}
                activeOutlineColor={COLORS.primary}
                outlineStyle={{
                    borderRadius: 8,
                }}
                contentStyle={{
                    justifyContent: 'center',
                }}
                textColor={COLORS.primary}
                {...rest}
            />
            {error && <Text style={{ color: '#CC0019' }}>{error}</Text>}
        </View>
    );
}
