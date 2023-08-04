import * as React from 'react';
import { View } from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { COLORS } from '../../constants';

function MapIcon(props) {
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
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <G clipPath="url(#clip0_30_1438)">
                    <Path
                        d="M0 .022V18h17.973v-5.348a1.124 1.124 0 000-.495V0H0v.022zM2.247 2.27h13.479v8.988h-3.37a1.128 1.128 0 100 2.247h3.37v2.248H2.246V2.27zm5.616 2.247a3.366 3.366 0 00-3.37 3.37c0 2.248 3.37 5.619 3.37 5.619s3.37-3.371 3.37-5.618a3.366 3.366 0 00-3.37-3.371zm0 2.247c.629 0 1.123.494 1.123 1.124 0 .629-.494 1.123-1.123 1.123A1.113 1.113 0 016.74 7.888c0-.63.494-1.124 1.123-1.124z"
                        fill={props.focused ? COLORS.primary : COLORS.gray}
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_30_1438">
                        <Path fill="#fff" d="M0 0H18V18H0z" />
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    );
}

export default MapIcon;
