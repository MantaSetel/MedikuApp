import React from 'react';
import { COLORS } from '../constants';
import { Button } from 'react-native-paper';

export default function PrimaryButtonOutline({ children, ...rest }) {
    return (
        <Button
            mode="outlined"
            borderRadius={12}
            width={320}
            height={56}
            onPress={() => console.log('Hello')}
            contentStyle={{ height: 56, justifyContent: 'center' }}
            labelStyle={{
                fontSize: 18,
                textAlignVertical: 'center',
                color: COLORS.primary,
            }}
            style={{
                backgroundColor: 'white',
                borderColor: COLORS.primary,
                borderWidth: 2,
            }}
            {...rest}
        >
            {children}
        </Button>
    );
}
