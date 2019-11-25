import React from 'react';
import { View, WebView,Text,StyleSheet } from "react-native";

const ComponentScreen = () => {
    
    return (    
        
        <View style={styles.container}>
        <Text style={{
            fontSize:26,
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:20

        }}>Unklab Introduction Video</Text>
        <WebView
        style={{
            marginTop: 50
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/embed/8shVVfOc7HY" }}

        />
      </View>

    );
};



export default ComponentScreen;


const styles = StyleSheet.create({
    container:{
        height:500
    }
});
