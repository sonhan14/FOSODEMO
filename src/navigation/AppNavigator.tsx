import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductScreen from '../screens/ProductScreen';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string) => ({ color, size }: { color: string; size: number }) => {
    let iconName: string;
    switch (routeName) {
        case 'Tổng quan':
            iconName = 'view-dashboard-outline';
            break;
        case 'Đơn hàng':
            iconName = 'clipboard-text-outline';
            break;
        case 'Sơ đồ Gantt':
            iconName = 'chart-timeline-variant';
            break;
        case 'Lệnh SX':
            iconName = 'file-document-outline';
            break;
        default:
            iconName = 'dots-horizontal';
    }
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
                tabBarStyle: { zIndex: 500 },
            })}
        >
            <Tab.Screen name="Tổng quan" component={ProductScreen} />
            <Tab.Screen name="Đơn hàng" component={ProductScreen} />
            <Tab.Screen name="Sơ đồ Gantt" component={ProductScreen} />
            <Tab.Screen name="Lệnh SX" component={ProductScreen} />
            <Tab.Screen name="Xem thêm" component={ProductScreen} />
        </Tab.Navigator>
    );
};

export default AppNavigator;
