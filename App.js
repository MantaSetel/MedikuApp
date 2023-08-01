import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import OnboardingAuth from './screens/OnboardingAuth';
import Onboarding from './components/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getDataStorage } from './utils/storage.utils';

const Stack = createNativeStackNavigator();

export default function App() {
    const [isFirstTime, setIsFirstTime] = React.useState(null);

    React.useEffect(() => {
        const checkIsFirstTime = async () => {
            const isFirstTime = await getDataStorage('isFirstTime');
            if (isFirstTime === 'false') {
                setIsFirstTime(false);
            }
        };
        checkIsFirstTime();
    }, []);

    return (
        <NavigationContainer>
            {/* <OnboardingAuth /> */}
            <Stack.Navigator>
                {isFirstTime && (
                    <Stack.Screen
                        name="Onboarding"
                        component={Onboarding}
                        options={{ headerShown: false }}
                    />
                )}
                <Stack.Screen
                    name="OnboardingAuth"
                    component={OnboardingAuth}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={OnboardingAuth}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={OnboardingAuth}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
