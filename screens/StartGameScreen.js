import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'


const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.h2}>Start a new game!</Text>

            <Card style={styles.inputContainer}>
                <Text style={styles.text}>Please enter a number</Text>
                <Input autoCapitalize="none" autoCorrect={false} keyboardType="numeric" maxLength={2} />
                <View style={styles.horizontalView}>
                    <Button title="Confirm" onPress={() => {}} style={styles.btnSuccess} color={Colors.btnDefaultColor} />
                    <Button title="Reset" onPress={() => {}} style={styles.btnDefault} color={Colors.btnResetColor} />
                </View>
            </Card>
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
        width: '100%',
        alignItems: 'center',
    },
    input: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 5,
        width: 50,
    },
    horizontalView: {
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '100%'
    },
    btnDefault: {
        backgroundColor: '#475c7f',
        borderRadius: 5,
        color: '#ffffff',
        paddingTop: 4,
        paddingRight: 10,
        paddingBottom: 4,
        paddingLeft: 10
    },
    btnSuccess: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderColor: '#cccccc',
        color: '#333333',
        paddingTop: 4,
        paddingRight: 10,
        paddingBottom: 4,
        paddingLeft: 10
    }
});

export default StartGameScreen;