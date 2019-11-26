import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ComponentScreen = () => {

    const by = 'By:';
    const nama = "Pasla, Frigia Faby";
    const nama2 = "Siar, Audrey H Joy Lord Regi";

    return (
        <View>
            <Image 
                style={{width: 400, height: 200}}
                source={require('../assets/logo_kost.jpg')}
            />
            <Text style={styles.textStyle}> 
                Final Project MultiPlatform
            </Text>
            <Text style={styles.textStyle2}>
                {by}
            </Text>
            <Text style={{
                marginLeft:'auto',
                marginRight:'auto',
                
            }}>
                {nama}
                {nama2}
            </Text>
            
            
        </View> 
        
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 26,
        marginLeft:'auto',
        marginRight:'auto',
        color: 'blue'
    },
    textStyle2: {
        fontSize: 22,
        color: 'red',
        marginLeft:'auto',
        marginRight:'auto'
    }
});

export default ComponentScreen;


