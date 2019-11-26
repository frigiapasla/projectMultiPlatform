import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image} from 'react-native';

const HomeScreen = ({ navigation }) => {
    
    return (
        <ImageBackground source={require('../assets/app_background.jpg')} style={{width: "100%", height: "100%"}}>
        <Image 
                style={{
                  width: 200, 
                  height: 100,
                  marginLeft:'auto',
                  marginRight:'auto'
                }}
                source={require('../assets/logo_kost2.png')}
            />
        <View>  
        <TouchableOpacity style={[styles.buttonContainer, styles.cewekButton]} onPress={() => navigation.navigate('Cewek')}>
          <Text style={styles.loginText}>Kost Cewek</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.buttonContainer, styles.cowokButton]} onPress={() => navigation.navigate('Cowok')}>
          <Text style={styles.loginText}>Kost Cowok</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={[styles.buttonContainer, styles.unklabButton]} onPress={() => navigation.navigate('unklab')}>
          <Text style={styles.loginText}>Unklab Introduction</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.buttonContainer, styles.aboutButton]} onPress={() => navigation.navigate('Component')}>
          <Text style={styles.loginText}>About</Text>
        </TouchableOpacity>

        </View>
        </ImageBackground>
        
    );
};

const styles = StyleSheet.create({
    
    buttonContainer: {
      height:60,
      width:190,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:60,
      borderRadius:30,
    },
    cowokButton: {
      backgroundColor: "#00CED1",
        justifyContent: 'center',
        alignItems: 'center',
      shadowColor: "#0000FF",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
  
      elevation: 19,
    },
    cewekButton: {
        backgroundColor: "#FFC0CB",
          justifyContent: 'center',
          alignItems: 'center',
        shadowColor: "#FF007F",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
    
        elevation: 19,
      },
      aboutButton: {
        backgroundColor: "#778899",
          justifyContent: 'center',
          alignItems: 'center',
        shadowColor: "#FF007F",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
    
        elevation: 19,
      },
      unklabButton: {
        backgroundColor: "white",
          justifyContent: 'center',
          alignItems: 'center',
        shadowColor: "#FF007F",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
    
        elevation: 19,
      }
      
  }); 

export default HomeScreen;