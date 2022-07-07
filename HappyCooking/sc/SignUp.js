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
  TouchableHighlight,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function SignUp({ navigation }) {
  return (

    <View style={styles.containter}>
      <Text style={styles.text}>Daftar dengan Email</Text>
      
      <View style={styles.textInput}>
        <TextInput style={styles.input} placeholder="Nama"></TextInput>
        <View style={styles.line}></View>
      </View>
      <View style={styles.textInput}>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <View style={styles.line}></View>
      </View>
      <View style={styles.textInput}>
        <TextInput style={styles.input} placeholder="Username"></TextInput>
        <View style={styles.line}></View>
      </View>
      <View style={styles.pswd}>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}></TextInput>
        <View style={styles.line}></View>
      </View>


      <View style={styles.pembatas}></View>
      
      <View style={styles.btn}>
        <Pressable style={styles.press} onPress={() =>  navigation.navigate('Login')} underlayColor= '#B0B0B0'>
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



export default SignUp;