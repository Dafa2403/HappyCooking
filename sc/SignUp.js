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
  Checkbox,
  useContext,} from 'react-native';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';



function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUname] = useState('');


  //firestore database
  const db = () =>{
    firestore()
    .collection('Users')
    .add({
      name: 'Ada Lovelace',
      age: 30,
    })
    .then(() => {
      console.log('User added!');
    });
  }


  // realtime database
  const input = () => {
    if(email == ''){
      alert('Silahkan masuk email!');
      return false;
    }
    firebase.database().ref('/listAkun/').push(
      {
        email:email,
        name:name,
        username:username,
        password:password,

      }
    ).then(() => {
      alert('Berhasil');
      let mail = firebase.database().ref('/listAkun');
      mail.once('value').then(snapshot => {
        console.log('Email :', snapshot.val());
      });
    }).catch(error => {
      alert(error);
    })
  }

  const regis = () => {
    
    auth()
    .createUserWithEmailAndPassword(email,password)
    .then(() => {
      console.log('User account Created!')
      Alert.alert(
        "Sign Up Berhasil!",
        "Akun Telah Dibuat",
        [{
          text: "OK",
          onPress: () => navigation.navigate("Login")
        }]
      )
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use'){
        console.log('That email address is already in use!');
      }
      else if (error.code === ' auth/invalid-email'){
        console.log('that email address is invalid!');
      }
      console.error(error);
    });
  }

  const btn = () =>{
    input();
    regis();
  }


  return (

    <View style={styles.containter}>
      <Text style={styles.text}>Daftar dengan Email</Text>
      
      <View style={styles.textInput}>
        <TextInput style={styles.input} placeholder="Nama" 
        onChangeText={text => setName(text)}></TextInput>
        <View style={styles.line}></View>
      </View>
      <View style={styles.textInput}>
        <TextInput style={styles.input} placeholder="Email"
        onChangeText={text => setEmail(text)} keyboardType='email-address'></TextInput>
        <View style={styles.line}></View>
      </View>
      <View style={styles.textInput}>
        <TextInput style={styles.input} placeholder="Username"
        onChangeText={text => setUname(text)}></TextInput>
        <View style={styles.line}></View>
      </View>
      <View style={styles.pswd}>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} 
        onChangeText={text => setPassword(text)}></TextInput>
        <View style={styles.line}></View>
      </View>


      <View style={styles.pembatas}></View>
      
      <View style={styles.btn}>
        <Pressable style={styles.press}  onPress={btn}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>Sign Up</Text>
        </Pressable>
      </View>
  
    </View>
  );
}



const styles = StyleSheet.create({
  containter:{
    height: '100%',
    backgroundColor: '#EFE8E0',

  },
  text:{
    color: '#000', 
    fontSize: 20, 
    fontFamily: 'Inter-Reguler',
    alignSelf: 'center',
    marginTop: 10
  },
  textInput:{
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
    marginTop: 50,
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
    marginTop: 20,
    borderWidth: 1,
  },
  btn:{
    marginTop: 60,
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



export default SignUp;