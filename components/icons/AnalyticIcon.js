import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../constants';

function AnalyticIcon(props) {
    return (
        <View
            style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: props.focused
                    ? COLORS.primaryWithOpacity
                    : COLORS.white,
                borderRadius: 14,
            }}
        >
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                {...props}
            >
                <Path
                    fill={props.focused ? COLORS.primary : COLORS.gray}
                    d="M7 17h2v-5H7v5zm8 0h2V7h-2v10zm-4 0h2v-3h-2v3zm0-5h2v-2h-2v2zm-6 9q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5z"
                />
            </Svg>
        </View>
    );
}

export default AnalyticIcon;
