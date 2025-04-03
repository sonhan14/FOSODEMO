import { useState } from 'react';
import { StatusItemType } from '../types/statusItemType';

export const useSidebarLogic = () => {
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
    const [pinnedOrders, setPinnedOrders] = useState<boolean[]>([false, false, false, false]);

    const statuses: StatusItemType[] = [
        { id: 'chuaSanXuat', label: 'Chưa sản xuất', color: '#FFEDD5', textColor: '#D97706' },
        { id: 'dangSanXuat', label: 'Đang sản xuất', color: '#DBEAFE', textColor: '#1D4ED8' },
        { id: 'hoanThanh', label: 'Hoàn thành', color: '#D1FAE5', textColor: '#047857' },
    ];

    const toggleStatus = (id: string) => {
        setSelectedStatuses((prev) =>
            prev.includes(id) ? prev.filter((status) => status !== id) : [...prev, id]
        );
    };

    const togglePin = (index: number) => {
        setPinnedOrders((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    return { statuses, selectedStatuses, pinnedOrders, toggleStatus, togglePin };
};