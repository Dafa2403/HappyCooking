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
  TouchableHighlight,
  Pressable,
  Alert,
  requireNativeComponent
 } from 'react-native';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function Detail() {
  const [key,setKey] = React.useState('')
  const db = database().ref('/listResep/')
  const user = auth().current
  db.orderByChild('email').equalTo('dafa@mail.com').on('value',function(snapshot){
    // console.log(snapshot.val());
    snapshot.forEach(function(data){
      setKey(data.key)
    })
  })

  var loop = [];
  var grab = []
  var [push,setPush] = React.useState([])
  var bahan, getBahan;
  for (let i = 0; i<7;i++){
    bahan = 'Bahan'+i
    getBahan = database().ref('listResep/'+key+'/'+bahan)
    getBahan.once('value').then(snapshot => {
      // console.log(snapshot.val())
      grab.push(snapshot.val())
      setPush(snapshot.val())
      
  })
  
  loop.push(
    <View key={i}>
      <Text style={styles.text}>{push}</Text>
      <View style={styles.line}></View>
    </View>
  );
  }
 
  console.log(push)
return (
  <ScrollView style={styles.container}>
  {/* Header */}
    <View style={styles.con}>
      <Text style={styles.textTitle}>Nasi Goreng Special</Text>
      <Image source={require('../img/nasgor.jpeg')} style={styles.imgDetail}></Image>
    </View>

    {/* Review */}
    <View style={styles.conReview}>
      <View style={styles.Review}>
        <Text style={styles.text}>Review</Text>
      </View>
    </View>

    {/* Bahan */}
    
    <View style={styles.conBahan}>
      <View style={styles.bahan}>
        {/* <Text>2 Siung bawang putih</Text>
        <View style={styles.line}></View>
        <Text>2 Siung bawang merah</Text>
        <View style={styles.line}></View> */}
        {loop}
      </View>
    </View>

    {/* Langkah */}
    <View style={styles.conLangkah}>
      <View style={styles.langkah}>
        <Text style={styles.text}>Haluskan Bawang putih</Text>
        {/* IMAGE */}
        <Text style={styles.text} >Haluskan Bawang merah</Text>
        {/* IMAGE */}
      </View>
    </View>

    {/* Writer */}
    <View style={styles.conWriter}>
      <Image style={styles.imgProfile} source={require('../img/O2.png')}/>
      <View style={styles.Writer}>
        <Text>Penulis 1</Text>
        <View style={{width: '30%', height: 2, backgroundColor: '#000'}}></View>
        <Text>Di terbitkan pada : 30 November 2021</Text>
      </View>
    </View>

    {/* Berikan Review */}
    {/* Star */}
    <View style={styles.conUlasan}>
      <View style={styles.ulasan}>
        <Text>Ulasan</Text>
        <TextInput style={styles.inputUlasan} placeholder='Berikan Ulasan...'>
        </TextInput>
      </View>
      {/* Btn Submit */}

      <Pressable style={styles.btnsubmit} onPress={() => Alert.alert('Test')}>
        <Text style={{color: '#fff'}}>Submit</Text>
      </Pressable>
    </View>

  </ScrollView>
  

);
}


  
const styles = require('./styles/style');

export default Detail;