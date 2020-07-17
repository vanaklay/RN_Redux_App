import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardItem = ({ children }) => {
    return (<View style={styles.container}>
        {children}
        </View>);
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
});

export {CardItem};