import React from 'react';
import { Text, View, FlatList, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const cewek = [
    { nama: 'Kost Azalea', jarak: '70 meter from unklab'},
    { nama: 'Kost Gazele', jarak: '50 meter from unklab'},
    { nama: 'Kost Pink', jarak: '285 meter from unklab'},
    { nama: 'Corner Residence', jarak: '20 meter from unklab'},
    { nama: 'dBlues Residence', jarak: '360 meter from unklab'},
    { nama: 'Kost Mizpa', jarak: '380 meter from unklab'},
    { nama: 'Kost Livia', jarak: '180 meter from unklab'},
    { nama: 'Kost Valerie', jarak: '280 meter from unklab'},
    { nama: 'Kost Wisma Anugerah', jarak: '270 meter from unklab'},
    { nama: 'Kost Ibrahim', jarak: '400 meter from unklab'}
   
];

const KostCewekScreen = () => {
    return (
        <FlatList 
            data={cewek}
            renderItem={({ item })=>
            <TouchableOpacity onPress={()=> console.log("touchable clicked")}>
                <View style={styles.textStyle}>
                    {/* <Image 
                        style={{width: 200, height: 200}}
                         source={item.imageUrl}
                        //source={require('../assets/apple-logo.jpg')}
                    /> */}
                    <Text >
                        {item.nama}
                    </Text>
                    <Text>
                        {item.jarak}
                    </Text>
                </View>
                </TouchableOpacity>
                }
                
            keyExtractor={item => item.nama}
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 40
    }
});

export default KostCewekScreen;