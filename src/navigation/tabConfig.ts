import ProductScreen from "../screens/ProductScreen.tsx";
import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import React from "react";

type RouteOptions = {
    name: string;
    component: React.ComponentType;
    options?: BottomTabNavigationOptions;
};

export const tabScreens: RouteOptions[] = [
    { name: 'Tổng quan', component: ProductScreen },
    { name: 'Đơn hàng', component: ProductScreen },
    { name: 'Sơ đồ Gantt', component: ProductScreen },
    { name: 'Lệnh SX', component: ProductScreen },
    { name: 'Xem thêm', component: ProductScreen },
];

