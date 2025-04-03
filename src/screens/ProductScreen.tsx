import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent.tsx';
import Icon from 'react-native-vector-icons/AntDesign';
import LeftMenuBar from '../components/LeftMenuBar/LeftMenuBar.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductScreen = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent
                title="Lệnh Sản Xuất"
                onMenuPress={() => setMenuVisible(true)}
                onScanPress={() => console.log('Scan Pressed')}
            />
            <View style={styles.container}>
                <Text style={styles.title}>Lệnh Sản Xuất</Text>

                <View style={styles.imageContainer}>
                    <Image source={require('../assets/maskGroup.png')} style={styles.image} />

                    <TouchableOpacity style={styles.plusIcon}>
                        <Icon name="pluscircle" size={40} color={'rgb(179, 255, 217)'} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.subtitle}>Chưa có Lệnh sản xuất.</Text>
                <Button title="Bắt đầu ghim lệnh ngay" buttonStyle={styles.button} onPress={() => { setMenuVisible(true) }} />
            </View>

            <LeftMenuBar visible={isMenuVisible} onClose={() => setMenuVisible(false)} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F9FB',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 50,
        marginBottom: 10,
        position: 'relative',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    plusIcon: {
        position: 'absolute',
        top: -5,
        right: -5,
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        borderRadius: 10,
    },
});

export default ProductScreen;
