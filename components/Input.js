import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return(
        <TextInput style={styles.input} />
    );
};


const styles = StyleSheet.create({
    input: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 5,
        width: 50,
    }
});

export default Input;