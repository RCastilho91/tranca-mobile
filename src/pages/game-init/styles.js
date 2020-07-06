import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create ({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#84cafc",
    },

    newGameContainer: {
        alignItems: 'center',
        marginTop: 300,
    },

    newGameButton: {
        textAlign: 'center',
        backgroundColor: "#2e404d",
        height: 80,
        width: 240,
        marginTop: 0,
        margin: 5,
        borderRadius: 20,
    },

    newGameButtonText: {
        color: "#FFFFFF",
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    }

});