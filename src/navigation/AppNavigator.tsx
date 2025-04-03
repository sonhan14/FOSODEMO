import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductScreen from '../screens/ProductScreen';
import {ICONS_MAP} from "../constants/bottomIcon.ts";
import {tabScreens} from "./tabConfig.ts";
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string) => ({ color, size }: { color: string; size: number }) => {
    const iconName = ICONS_MAP[routeName] || 'dots-horizontal';
    return <Icon name={iconName} size={size} color={color} />;
};


const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: getTabBarIcon(route.name),
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarStyle: styles.tabBar,
            })}
        >
            {tabScreens.map(screen => (
                <Tab.Screen key={screen.name} name={screen.name} component={screen.component} />
            ))}
        </Tab.Navigator>
    );
};

export default AppNavigator;

const styles = StyleSheet.create({
    tabBar: {
        zIndex: 500,
    },
});

