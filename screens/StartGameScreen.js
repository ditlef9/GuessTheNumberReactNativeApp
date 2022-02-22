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
                    <Button title="Confirm" onPress={() => {}} />
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
        fontSize: '110%',
        marginVertical: '10'
    },
    text: {
        color: 'white',
    },
    inputContainer: {

    },
    horizontalView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between', /* Button on left and right side of row */
        paddingHorizontal: 15
    }

});

export default StartGameScreen;