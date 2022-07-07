import React, {useState} from 'react';
import { StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  View,
  ImageBackground,
  Image,
  TouchableHighlight,
  Pressable,
  Alert,
  requireNativeComponent,
  Header
 } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tambah from '../App';

function profile({navigation}) {
    const resep = [];
    const [count, setCount] = useState(0);
    const Tresep = () => setCount(count + 1);
    // for (let i = 0; i<count;i++){
    //     resep.push(
    //         <View style={styles.cardResep}>
    //             <Image></Image>  
    //         </View>
    //     );
    //   }
    return (
      <ScrollView style={{backgroundColor: '#EFE8E0'}}>
            <View style={styles.conProfile}>
                <View style={styles.bg}>
                    <Image source={require('../img/header.png')} style={{width: '100%', height: '100%', resizeMode: 'cover',opacity: 0.8}}></Image>
                </View>
                <View style={styles.profile}>
                    <Image style={styles.imgProfile} source={require('../img/O2.png')}/>
                    <View style={styles.name} >
                        <Text style={styles.textName}>Nama Pengguna</Text>
                        <Text style={styles.text}>@Username</Text>
                        <Pressable style={styles.edit}>
                            <Text style={styles.text}>Edit Profile</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.conResep}>
                <View style={styles.listResep}>
                    <Text style={styles.subTitle}>Resep Saya</Text>
                    <Pressable style={styles.tambah} onPress={() => navigation.navigate('Tambah Resep')}>
                        <Text style={styles.text}>Tambah Resep</Text>
                    </Pressable>
                </View>
            </View>
            <View Style={styles.conBtn}>
                <Pressable style={styles.btnLogout} onPress={() =>  navigation.navigate('Login')}>
                    <Text style={{color: '#fff'}}>LOGOUT</Text>
                </Pressable>
            </View>
            
      </ScrollView>
    );
}

const styles= require('./styles/styleProfile');




export default profile;