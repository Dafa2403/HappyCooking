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
 import auth from '@react-native-firebase/auth';
 import database from '@react-native-firebase/database';
 import ReactNativeBiometrics from 'react-native-biometrics'

function profile({navigation}) {
    const resep = [];
    const [count, setCount] = useState(0);
    // const Tresep = () => setCount(count + 1);
    // for (let i = 0; i<count;i++){
    //     resep.push(
    //         <View style={styles.cardResep}>
    //             <Image></Image>  
    //         </View>
    //     );
    //   }

    ReactNativeBiometrics.isSensorAvailable()
    .then((resultObject) => {
    const { available, biometryType } = resultObject
 
    if (available && biometryType === ReactNativeBiometrics.TouchID) {
      console.log('TouchID is supported')
    } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
      console.log('FaceID is supported')
    } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
      console.log('Biometrics is supported')
    } else {
      console.log('Biometrics not supported')
    }
  })

    const [name, setName] = useState('');
    const [key, setKey] = useState('');
    const [username, setUsername] = useState('');

    const db = database().ref('/listAkun/')
    const user = auth().currentUser;
    var email;
    if(user != null){
      email = user.email;
      
      db.orderByChild('email').equalTo(user.email)
      .on('value', function(snapshot){
        // console.log(snapshot.val());
        snapshot.forEach(function(data){
          setKey(data.key)
          
        })
      })
  }
  const getName = database().ref('listAkun/'+key+'/name');
    getName.once('value').then(snapshot => {
      setName(snapshot.val())
    })
  const getUname = database().ref('listAkun/'+key+'/username');
    getUname.once('value').then(snapshot => {
      setUsername(snapshot.val())
    })


    return (
      <ScrollView style={{backgroundColor: '#EFE8E0'}}>
            <View style={styles.conProfile}>
                <View style={styles.bg}>
                    <Image source={require('../img/header.png')} style={{width: '100%', height: '100%', resizeMode: 'cover',opacity: 0.8}}></Image>
                </View>
                <View style={styles.profile}>
                    <Image style={styles.imgProfile} source={require('../img/O2.png')}/>
                    <View style={styles.name} >
                        <Text style={styles.textName}>{name}</Text>
                        <Text style={styles.text}>@{username}</Text>
                        <Pressable style={styles.edit} onPress={() => navigation.navigate('Edit')}>
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