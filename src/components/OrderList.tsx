import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressBar from './ProgressBar';
import { StatusItemType } from '../types/statusItemType';

const OrderList = ({
    orders,
    statuses,
    pinnedOrders,
    togglePin,
}: {
    orders: string[];
    statuses: StatusItemType[];
    pinnedOrders: boolean[];
    togglePin: (index: number) => void;
}) => {
    return (
        <View style={styles.orderList}>
            {orders.map((order, index) => {
                const status = statuses[index % statuses.length];
                return (
                    <View key={index} style={styles.orderItem}>
                        <View style={styles.orderStatusContainer}>
                            <Text
                                style={[
                                    styles.orderStatus,
                                    { backgroundColor: status.color, color: status.textColor },
                                ]}
                            >
                                {status.label}
                            </Text>
                            <TouchableOpacity onPress={() => togglePin(index)} style={styles.unpinIconContainer}>
                                <MaterialCommunityIcons
                                    name={pinnedOrders[index] ? 'pin' : 'pin-off-outline'}
                                    size={20}
                                    color={pinnedOrders[index] ? 'red' : 'black'}
                                />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.orderTitle}>{order}</Text>
                        <Text style={styles.deadline}>Deadline: 13/03/2025</Text>
                        <View style={styles.progressBarContainer}>
                            <ProgressBar progressPercent={50} />
                            <ProgressBar progressPercent={90} backgroundColor="#E5E7EB" fillColor="#007AFF" />
                            <TouchableOpacity style={styles.infoIconContainer} onPress={() => { }}>
                                <MaterialCommunityIcons name="information-outline" size={20} color="#007AFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    orderList: {
        flexGrow: 1,
    },
    orderItem: {
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderLeftWidth: 5,
        borderLeftColor: 'blue',
        borderTopColor: '#ddd',
        borderBottomColor: '#ddd',
        borderRightColor: '#ddd',
    },
    orderStatusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderStatus: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        padding: 5,
        borderRadius: 5,
        color: '#333',
        width: '50%',
    },
    orderTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 5,
    },
    deadline: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 10,
    },
    progressBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    unpinIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    infoIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});

export default OrderList;