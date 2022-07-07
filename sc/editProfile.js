import React, {useState,useEffect} from 'react';
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
  Header,
  SnapshotViewIOSBase
 } from 'react-native';
 import auth from '@react-native-firebase/auth';
 import database from '@react-native-firebase/database';

function Edit() {
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
        console.log(snapshot.val());
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

        <View style={styles.containter}>
          <Text style={styles.text}>Edit Profile</Text>

          <View style={styles.textInput}>
            <TextInput style={styles.input} placeholder="Nama" value={name}></TextInput>
            <View style={styles.line}></View>
          </View>
          <View style={styles.textInput}>
            <TextInput style={styles.input} 
            value={email} editable={false} selectTextOnFocus={false}></TextInput>
            <View style={styles.line}></View>
          </View>
          <View style={styles.textInput}>
            <TextInput style={styles.input} placeholder="Username" value={username}></TextInput>
            <View style={styles.line}></View>
          </View>
          <View style={styles.pswd}>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} 
            onChangeText={text => setPassword(text)}></TextInput>
            <View style={styles.line}></View>
          </View>
          <View style={styles.pembatas}></View>

          <View style={styles.btn}>
            <Pressable style={styles.press}  >
              <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>Save</Text>
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
    width: 170,
    alignSelf: 'center',
    
  },
  press:{
    borderRadius: 12,
    backgroundColor: '#000',
    color:'#fff',
    height: 35,
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



export default Edit;
