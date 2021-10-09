import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';

const CButton = ({onPress, title, ...op}) => {
    return (
        <View style={styles.button_container}>
            <TouchableOpacity style={styles.button} onPress={onPress} {...op}>
                <Text style={styles.button.txt}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button_container: {
        width: 120,
        position: 'absolute',
        bottom: 20,
        left: (Dimensions.get('window').width / 2) - 60,
        zIndex: 10,
        elevation: 5
    },
    button: {
        txt: {
            color: "#FFFFFF",
            fontSize: 18,
            textAlign: 'center'
        },
        backgroundColor: '#e91e63',
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 5
    }
});

export default CButton;
