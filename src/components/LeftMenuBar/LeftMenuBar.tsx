import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
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
import { width } from '../../constants/constants.ts';
import StatusItem from '../StatusItem.tsx';
import { useSidebarLogic } from '../../hooks/useSidebarLogic.ts';
import OrderList from '../OrderList.tsx';
import {styles} from "./LeftSidebar.styles.ts";

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


export default LeftSidebar;
