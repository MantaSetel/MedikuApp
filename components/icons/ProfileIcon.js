import * as React from 'react';
import { View } from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { COLORS } from '../../constants';

function ProfileIcon(props) {
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
                <G clipPath="url(#clip0_30_1432)">
                    <Path
                        d="M4.167 16.667h11.666v1.666H4.167v-1.666zM10 15a6.667 6.667 0 110-13.334A6.667 6.667 0 0110 15z"
                        fill={props.focused ? COLORS.primary : COLORS.gray}
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_30_1432">
                        <Path fill="#fff" d="M0 0H20V20H0z" />
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    );
}

export default ProfileIcon;
