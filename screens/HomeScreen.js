import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
    
    return (
        <ImageBackground>
        <View>
            
            <Text> Home Screen </Text>
            <Button 
                title="Component Screen"
                onPress={()=> navigation.navigate('Component')}
            />
            <Button 
                title="Kost Cewek"
                onPress={()=> navigation.navigate('Cewek')}
            />
            <Button 
                title="Kost Cowok"
                onPress={()=> navigation.navigate('Cowok')}
            />

            

        </View>
        </ImageBackground>
        
    );
};

export default HomeScreen;