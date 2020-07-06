import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native/';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function NewGame() {
    const navigation = useNavigation();

    function navigateTwo() {
        navigation.navigate('TwoTeams');
    }

    function navigateThree() {
        navigation.navigate('ThreeTeams')
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Image source={ logoImg } />
            </View>

            <View style= { styles.newGameContainer }>
                <TouchableOpacity
                style={ styles.newGameButton }
                onPress={ navigateTwo }>
                    <Text style={ styles.newGameButtonText }>Two players or people</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={ styles.newGameButton }
                onPress={ navigateThree }>
                    <Text style={ styles.newGameButtonText }>Three players or people</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}