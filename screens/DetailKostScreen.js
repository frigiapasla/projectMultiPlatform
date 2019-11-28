import React from 'react';
import { View, Text, Button,  ImageBackground, StyleSheet} from 'react-native';

class DetailKostScreen extends React.Component {
  
    constructor(props) {
        super(props);

      }

    render() {
        return (
        
            <ImageBackground source={require('../assets/bg1.jpg')} style={{width: "100%", height: "100%"}}>
        <View> 
    <Text>DETAIL KOST {this.props.navigation.getParam('Nama')}</Text>
    <Text>              </Text>
    <Text>              </Text>
            <Text>harga kost perbulannya : Rp.{this.props.navigation.getParam('Harga')}/perbulannya</Text>
        <Text>Lokasi : {this.props.navigation.getParam('Lokasi')}</Text>
        <Text>Nomor Telp : {this.props.navigation.getParam('Nomor')}</Text>
            <Button title="Go to Menu" onPress={() => this.props.navigation.navigate('Home')}/>
  
            
        </View>
     
        </ImageBackground>
       );
    }
}


export default DetailKostScreen;