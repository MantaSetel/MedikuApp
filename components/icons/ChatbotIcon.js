import * as React from 'react';
import { View } from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { COLORS } from '../../constants';

function ChatbotIcon(props) {
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
                <G clipPath="url(#clip0_30_1429)">
                    <Path
                        d="M1.667 7.495a4.992 4.992 0 015-4.995h6.666c2.761 0 5 2.246 5 4.995V17.5H6.667c-2.761 0-5-2.246-5-4.995v-5.01zm10 1.672v1.666h1.666V9.167h-1.666zm-5 0v1.666h1.666V9.167H6.667z"
                        fill={props.focused ? COLORS.primary : COLORS.gray}
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_30_1429">
                        <Path fill="#fff" d="M0 0H20V20H0z" />
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    );
}

export default ChatbotIcon;
