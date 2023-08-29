import { View } from 'react-native';
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import { COLORS } from '../constants';
import HomeIcon from '../components/icons/HomeIcon';
import ProfileIcon from '../components/icons/ProfileIcon';
import Profile from './Profile';
import HearthIcon from '../components/icons/HearthIcon';
import AnalyticIcon from '../components/icons/AnalyticIcon';
import AIIcon from '../components/icons/AIIcon';
import AI from './AI';
import MalnutritionPrediction from './MalnutritionPrediction';
import History from './History';
import AuthContext from '../context/AuthContext';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 100,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
};

export default function Main({ navigation }) {
    const { isLogout } = useContext(AuthContext);

    if (isLogout) {
        return navigation.navigate('Login');
    }

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <HomeIcon focused={focused} />
                            </View>
                        );
                    },
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Malnutrition"
                component={MalnutritionPrediction}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <HearthIcon focused={focused} />
                            </View>
                        );
                    },
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="AI"
                component={AI}
                options={{
                    tabBarIcon: () => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: COLORS.primary,
                                    padding: 11,
                                    borderRadius: 18,
                                }}
                            >
                                <AIIcon />
                            </View>
                        );
                    },
                    tabBarVisible: false,
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="History"
                component={History}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <AnalyticIcon focused={focused} />
                            </View>
                        );
                    },
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <ProfileIcon focused={focused} />
                            </View>
                        );
                    },
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}
