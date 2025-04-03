import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import { height, width } from '../constants/constants';
import StatusItem from './StatusItem';
import { useSidebarLogic } from '../hooks/useSidebarLogic';
import OrderList from './OrderList';

const MENU_WIDTH = width * 0.8;

const LeftSidebar = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
    const translateX = useSharedValue(-MENU_WIDTH);
    const { statuses, pinnedOrders, toggleStatus, togglePin } = useSidebarLogic();
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
    const [isStatusExpanded, setIsStatusExpanded] = useState(false);
    const statusHeight = useSharedValue(0);


    useEffect(() => {
        translateX.value = withTiming(visible ? 0 : -MENU_WIDTH, { duration: 300 });
    }, [visible, translateX]);


    useEffect(() => {
        statusHeight.value = withTiming(isStatusExpanded ? statuses.length * 50 + 20 : 0, {
            duration: 300,
        });
    }, [isStatusExpanded, statusHeight, statuses.length]);


    const animatedStatusStyle = useAnimatedStyle(() => ({
        height: statusHeight.value,
        overflow: 'hidden',
    }));

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    return (
        <>
            {visible && (
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
            )}

            <Animated.View style={[styles.sidebar, animatedStyle]}>
                {/* Header Menu */}
                <View style={styles.header}>
                    <Text style={styles.title}>Lệnh Sản Xuất</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Icon name="x" size={24} color="#555" />
                    </TouchableOpacity>
                </View>

                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <Text style={styles.searchInput}>Tìm kiếm mã lệnh sản xuất</Text>
                    <View style={styles.searchIconContainer}>
                        <Icon name="search" size={20} color="#fff" />
                    </View>
                </View>

                {/* Trạng thái */}
                <View style={styles.statusMain}>
                    <TouchableOpacity
                        style={styles.statusHeader}
                        onPress={() => setIsStatusExpanded((prev) => !prev)}
                    >
                        <Text style={styles.sectionTitle}>Trạng thái</Text>
                        <Icon
                            name={isStatusExpanded ? 'chevron-up' : 'chevron-down'}
                            size={20}
                            color="#555"
                        />
                    </TouchableOpacity>
                    <Animated.View
                        style={[
                            styles.statusContainer,
                            animatedStatusStyle,
                        ]}
                    >
                        {statuses.map((status) => (
                            <StatusItem
                                key={status.id}
                                status={status}
                                isSelected={selectedStatuses.includes(status.id)}
                                onPress={toggleStatus}
                            />
                        ))}
                    </Animated.View>
                </View>

                {/* Bỏ ghim toàn bộ */}
                <View style={styles.unpinContainer}>
                    <Text style={styles.unpinText}>Bỏ ghim toàn bộ</Text>
                    <TouchableOpacity onPress={() => setSelectedStatuses([])} style={styles.unpinIconContainer}>
                        <MaterialCommunityIcons name="pin-off-outline" size={20} color="black" />
                    </TouchableOpacity>
                </View>

                {/* Danh sách lệnh sản xuất */}
                <OrderList
                    orders={['LSX-13032514', 'LSX-13032515', 'LSX-13032516', 'LSX-13032517']}
                    statuses={statuses}
                    pinnedOrders={pinnedOrders}
                    togglePin={togglePin}
                />
            </Animated.View>
        </>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    sidebar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: MENU_WIDTH,
        height: height,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        borderTopRightRadius: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchBar: {
        height: '7%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 15,
        overflow: 'hidden',
    },
    searchInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 15,
        color: '#333',
        fontWeight: 400,
        borderWidth: 1,
        borderColor: '#ddd',
        height: '100%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        textAlignVertical: 'center'
    },
    searchIconContainer: {
        width: '20%',
        height: '100%',
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    statusHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    statusMain: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    statusContainer: {
        overflow: 'hidden',
    },
    statusItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
    },
    statusIcon: {
        marginRight: 10,
    },
    statusTextContainer: {
        padding: 5,
        minWidth: width * 0.4,
        borderRadius: 5,
    },
    statusText: {
        fontSize: 14,
        fontWeight: 600,
    },
    unpinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    unpinIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    unpinText: {
        fontSize: 15,
        color: '#333',
        fontWeight: 600,
    },
});

export default LeftSidebar;
