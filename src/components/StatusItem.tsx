import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusItemType } from '../types/statusItemType';

type StatusItemProps = {
    status: StatusItemType,
    isSelected: boolean,
    onPress: (id: string) => void
}

const StatusItem = ({ status, isSelected, onPress }: StatusItemProps) => {
    return (
        <TouchableOpacity
            key={status.id}
            style={styles.statusItem}
            onPress={() => onPress(status.id)}
        >
            <Icon
                name={isSelected ? 'check-square' : 'square'}
                size={20}
                color={isSelected ? '#007AFF' : '#555'}
                style={styles.statusIcon}
            />
            <View style={[styles.statusTextContainer, { backgroundColor: status.color }]}>
                <Text style={[styles.statusText, { color: status.textColor }]}>
                    {status.label}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    statusItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    statusIcon: {
        marginRight: 10,
    },
    statusTextContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    statusText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default StatusItem;
