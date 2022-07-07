import React, {useEffect} from 'react';
import { 
  Image,
  ActivityIndicator, 
  StyleSheet,
  View,
  ImageBackground
 } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function SS({navigation}) {
    useEffect(()=>{
        setTimeout(() => {
            navigation.replace('Login')
        }, 1000)
    },[navigation])
    return (
        <View style={styles.con}>
            <ImageBackground source={require('../img/bg.jpg')} style={styles.bg} resizeMode="cover">
                <Image source={require('../img/logo.png')} style={styles.logo}></Image>
                <ActivityIndicator size="large" color="#FF8A01"  />
            </ImageBackground>
        </View>
    );
}




const styles = StyleSheet.create({
    con:{
        width: '100%',
        height: '100%',
    },
    bg:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: '50%',
        height: '30%',
        resizeMode: 'contain',
    }
})

export default SS;
