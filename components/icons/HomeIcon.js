import * as React from 'react';
import { View } from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { COLORS } from '../../constants';

function HomeIcon(props) {
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
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <G clipPath="url(#clip0_30_1435)">
                    <Path
                        d="M2.5 10.833h6.667V2.5H2.5v8.333zm0 6.667h6.667v-5H2.5v5zm8.333 0H17.5V9.167h-6.667V17.5zm0-15v5H17.5v-5h-6.667z"
                        fill={props.focused ? COLORS.primary : COLORS.gray}
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_30_1435">
                        <Path fill="#fff" d="M0 0H20V20H0z" />
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    );
}

export default HomeIcon;
