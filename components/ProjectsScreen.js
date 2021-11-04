
import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class AboutScreen extends Component {

    static navigationOptions = {
        drawerLabel: 'About',
        drawerIcon: ({ tintColor }) => (
        <Image
            source={require('../assets/icon.png')}
            style={[styles.icon, { tintColor: tintColor }]}
        />
    ),
    };

    render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>projects Screen</Text>
       
        <Button
            title="Go Home"
            onPress={() => this.props.navigation.navigate('Home')}
        />
        </View>
    )
     } 
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
});