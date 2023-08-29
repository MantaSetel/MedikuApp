import React from 'react';
import { StatusBar } from 'expo-status-bar';
import OnboardingAuth from './screens/OnboardingAuth';
import Onboarding from './components/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getDataStorage, removeDataStorage } from './utils/storage.utils';
import Login from './screens/Login';
import Register from './screens/Register';
import { AuthProvider } from './context/AuthContext';
import NavigationBar from './components/NavigationBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './screens/Main';
import AICamera from './screens/AI/AICamera';

const Stack = createNativeStackNavigator();

export default function App() {
    const [isFirstTime, setIsFirstTime] = React.useState(null);

    React.useEffect(() => {
        const checkIsFirstTime = async () => {
            const isFirstTime = await getDataStorage('isFirstTime');
            if (isFirstTime === 'false') {
                setIsFirstTime(false);
            } else {
                setIsFirstTime(true); // Set isFirstTime to true if it's null or not 'false'
            }
        };
        checkIsFirstTime();
    }, []);

    return (
        <NavigationContainer>
            <AuthProvider>
                {isFirstTime === null ? (
                    // If isFirstTime is still null, show a loading or splash screen
                    <></>
                ) : isFirstTime ? (
                    // If isFirstTime is true, show Onboarding
                    <Stack.Navigator initialRouteName="Main">
                        <Stack.Screen
                            name="Onboarding"
                            component={Onboarding}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="OnboardingAuth"
                            component={OnboardingAuth}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={Register}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Main"
                            component={Main}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="AICamera"
                            component={AICamera}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                ) : (
                    // If isFirstTime is false, show OnboardingAuth
                    <Stack.Navigator initialRouteName="Main">
                        <Stack.Screen
                            name="OnboardingAuth"
                            component={OnboardingAuth}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={Register}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Main"
                            component={Main}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="AICamera"
                            component={AICamera}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                )}
                <StatusBar style="auto" />
            </AuthProvider>
        </NavigationContainer>
    );
}
