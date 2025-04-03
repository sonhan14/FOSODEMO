import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ProgressBarProps = {
    progressPercent: number,
    backgroundColor?: string,
    fillColor?: string,
    width?: number
}

const ProgressBar = ({ progressPercent, backgroundColor = '#FFE4C4', fillColor = '#FFA500', width = 100 }: ProgressBarProps) => {
    return (
        <View style={styles.container}>
            <View style={[styles.progressBackground, { backgroundColor, width }]}>
                <View style={[styles.progressFill, { width: `${progressPercent}%`, backgroundColor: fillColor }]}>
                    <Text style={styles.progressText}>{progressPercent}%</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    progressBackground: {
        height: 15,
        borderRadius: 10,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
    },
});

export default ProgressBar;
