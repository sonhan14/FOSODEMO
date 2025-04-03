import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from "./HeaderComponent.styles.ts";

interface HeaderProps {
    title: string;
    onMenuPress?: () => void;
    onScanPress?: () => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({ title, onMenuPress, onScanPress }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
            <View style={styles.header}>
                <TouchableOpacity onPress={onMenuPress} style={styles.iconContainer}>
                    <Icon name="menu" size={28} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>{title}</Text>

                <TouchableOpacity onPress={onScanPress} style={styles.iconContainer}>
                    <Icon name="qrcode-scan" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


export default HeaderComponent;
