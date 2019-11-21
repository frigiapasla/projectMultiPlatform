import React from 'react';
import { Text, View, FlatList, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const cowok = [
    { nama: 'Kost Mizpa1', jarak: '380 meter from unklab'},
    { nama: 'Kost Karundeng Boys', jarak: '240 meter from unklab'},
    { nama: 'Kost Imanuel Boys', jarak: '280 meter from unklab'},
    { nama: 'Kost Charity', jarak: '210 meter from unklab'},
    { nama: 'Kost Kaumpungan Boys', jarak: '400 meter from unklab'},
    { nama: 'Kost Boys', jarak: '300 meter from unklab'},
    { nama: 'Kost Mambu', jarak: '350 meter from unklab'},
   
];

const KostCowokScreen = () => {
    return (
        <FlatList 
            data={cowok}
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

export default KostCowokScreen;