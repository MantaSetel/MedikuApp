import React from 'react';
import { COLORS } from '../constants';
import { Button } from 'react-native-paper';

export default function PrimaryButton({ children, ...rest }) {
    return (
        <Button
            mode="contained"
            borderRadius={12}
            buttonColor={COLORS.primary}
            width={320}
            height={56}
            textColor="#fff"
            contentStyle={{
                height: 56,
                justifyContent: 'center',
                ...rest.contentStyle,
            }}
            labelStyle={{
                textAlignVertical: 'center',
                fontSize: 17,
                ...rest.labelStyle,
            }}
            {...rest}
        >
            {children}
        </Button>
    );
}
