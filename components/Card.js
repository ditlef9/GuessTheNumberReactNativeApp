import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
       /* Create a card view with styles card and also overwrite with custom style from props */
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#3c3f41', /* grey */
        width: '100%',
        padding: 20,
        borderRadius: 10,

        /* Shadow iOS */
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,

        /* Shadow Android */
        elevation: 5,
    }
});

export default Card;