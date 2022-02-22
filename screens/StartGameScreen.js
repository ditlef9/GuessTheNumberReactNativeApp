import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.h2}>Start a new game!</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.text}>Please enter a number</Text>
                <TextInput />
                <View style={styles.horizontalView}>
                    <Button title="Reset" onPress={() => {}} />
                    <Button title="Confirm" onPress={() => {}} style={styles.btnSuccess} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1, /*takes all the space left */
        padding: 10,
        alignItems: 'center',
    },
    h2: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10
    },
    text: {
        color: 'white',
    },
    inputContainer: {
        backgroundColor: '#3c3f41', /* grey */
        alignItems: 'center',
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

    },
    horizontalView: {
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '100%'
    },
    btnDefault: {
    },
    btnSuccess: {
    }
});

export default StartGameScreen;