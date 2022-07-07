import * as React from 'react';
import { StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  View,
  ImageBackground,
  Image,
  Button,
  Alert,
  Pressable,
  TouchableHighlight,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Component} from 'react';
import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';


function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const In = () => {
    
      auth()
      .signInWithEmailAndPassword(email,password)
      .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:',user.email);
          Alert.alert(
            "Success!",
            "Login Berhasil!",
            [{
              text: "OK",
              onPress: () => navigation.navigate("Home")
            }]
          )
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email'){
          Alert.alert(
                "Error!",
                "Isi email dengan benar!",
                [{
                  text: "OK",
                  onPress: () => navigation.navigate("Login")
                }]
              )
        }
        else if(error.code === 'auth/user-not-found'){
          Alert.alert(
            "Error!",
            "Akun belum terdaftar!",
            [{
              text: "OK",
              onPress: () => navigation.navigate("Login")
            }]
          )
        }
        else if(error.code === 'auth/wrong-password'){
          Alert.alert(
                "Error!",
                "Password salah!",
                [{
                  text: "OK",
                  onPress: () => navigation.navigate("Login")
                }]
              )
        }
        console.error(error);
      });

    }




    return (

      <View style={styles.containter}>
        <Text style={styles.text}>Login</Text>
        <View style={styles.email}>
        
          <TextInput style={styles.input} placeholder="Email" 
          value={email} 
          onChangeText={text =>setEmail(text)}>
          </TextInput>

          <View style={styles.line}></View>
        </View>
        <View style={styles.pswd}>

          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}
          value={password}
          onChangeText={text =>setPassword(text)}
          >
          </TextInput>

          <View style={styles.line}></View>
        </View>
        <Pressable onPress={() =>  navigation.navigate('SignUp')} style={styles.btnAkun} underlayColor= '#B0B0B0'>
          <Text style={styles.fontBtn}>Belum Punya Akun?</Text>
        </Pressable>
        <View style={styles.pembatas}></View>
        {/* tombol login */}
        <View style={styles.second}>
          <Image source={require('../img/google.png')} style={{opacity: 1}}></Image>
          <Image source={require('../img/facebook.png')} style={{width: 24, resizeMode: 'contain', height: 24}}></Image>
        </View>

        <View style={styles.btn}>
          <Pressable style={styles.press} onPress={In}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>Login</Text>
          </Pressable>
        </View>
        <View>
         <Text style={styles.footer}>Dengan Mendaftar, kamu telah menyetujui Ketentuan Pemakaian dan Peraturan Privasi yang ada di Happy Cooking</Text> 
        </View>

      </View>
    );
  
}


const styles = StyleSheet.create({
  containter:{
    height: '100%',
    backgroundColor: '#EFE8E0',
  },
  btnAkun:{
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
  },
  fontBtn:{
    color: '#BE6700',
    fontFamily: 'Inter-Reguler',
  },
  text:{
    color: '#000', 
    fontSize: 20, 
    fontFamily: 'Inter-Reguler',
    alignSelf: 'center',
    marginTop: 10
  },
  email:{
    backgroundColor:'white',
    width: 350,
    alignSelf: 'center',
    marginTop: 30,
    height: 40
  },
  input:{
    width: '100%',
    marginLeft: 10,
    marginRight: 10
  },
  line:{
    backgroundColor: '#BE6700',
    width: '100%',
    height: 3
  },
  pswd:{
    backgroundColor:'white',
    width: 350,
    alignSelf: 'center',
    marginTop: 30,
    height: 40
  },
  pembatas:{
    marginTop: 30,
    backgroundColor: '#B0B0B0',
    width: 350,
    height: 2,
    alignSelf: 'center'
  },
  second:{
    width: 150,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 12,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btn:{
    marginTop: 40,
    width: '80%',
    alignSelf: 'center',
    
  },
  press:{
    borderRadius: 12,
    backgroundColor: '#000',
    color:'#fff',
    height: 45,
    justifyContent: 'center'
  },
  footer:{
    marginTop: 50,
    textAlign: 'center',
    backgroundColor: '#0000',
    width: 350,
    alignSelf: 'center',
    color: '#000'
  },

});

const Tab = createBottomTabNavigator();

export default Login;