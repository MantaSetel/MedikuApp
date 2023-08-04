import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import { COLORS } from '../constants';
import HomeIcon from '../components/icons/HomeIcon';
import MapIcon from '../components/icons/MapIcon';
import ChatbotIcon from '../components/icons/ChatbotIcon';
import ProfileIcon from '../components/icons/ProfileIcon';
import AIIcon from '../components/icons/AIIcon';

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

export default function Main() {
    return (
        <NavigationContainer>
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
                    name="Map"
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
                                    <MapIcon focused={focused} />
                                </View>
                            );
                        },
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name="AI"
                    component={Home}
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
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name="Chatbot"
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
                                    <ChatbotIcon focused={focused} />
                                </View>
                            );
                        },
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name="Profile"
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
                                    <ProfileIcon focused={focused} />
                                </View>
                            );
                        },
                    }}
                ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
