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
 } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage'


function add({navigation}) {


    var inputBahan = []
    var inputLangkah = [];
    const [count, setCount] = useState(1);
    const [lCount, LsetCount] = useState(1);
    const tambah = () => LsetCount(lCount + 1);
    const onPress = () => setCount(count + 1);
    const sub =() => setCount(count - 1);
    const subS =() => LsetCount(lCount - 1);
    const cam =() => navigation.navigate('Camera');
 
    const [title, setTitle] = useState('')
    const [bahan,setBahan] = useState('')
    const [langkah,setLangkah] = useState('')

    const [key, setKey] = useState('');
    const db = firebase.database().ref('/listAkun/')
    
    const user = auth().currentUser;
    var email;
    if(user != null){
      email = user.email;
    }

    db.orderByChild('email').equalTo(user.email)
      .on('value', function(snapshot){
        
        snapshot.forEach(function(data){
          setKey(data.key)
        })
      })
   

    const arrB = []
    const arrL = []
    
    
    for (let i = 0; i<count;i++){
      
      inputBahan.push(
        <View key={i} style={styles.con}>
          <View style={styles.conInput}>
            <TextInput style={styles.input2} placeholder="Contoh : 1 sendok garam" 
            onChangeText={(text) => setBahan(text)}
            ></TextInput>
            <Pressable onPress={sub}>
              <Entypo name={'cross'} size={20}/>
            </Pressable>
            
          </View>
            
        </View>
      );
      // arrB.push({['bahan'+i]:bahan})
    }
    console.log(count)
    
    // for (let i = 0; i<lCount;i++){
    //     inputLangkah.push(
    //       <View key={i} style={styles.con}>
    //         <Pressable onPress={cam}>
    //             {/* Icon IMG */}
    //             <FontAwesome5 name={'images'} size={30} style={styles.icon} color='black'/>
    //         </Pressable>
    //         <View style={styles.conInput2}>
    //         <TextInput style={styles.input} placeholder="Langkah" 
    //         onChangeText={text => setLangkah(text)}
    //         ></TextInput>
    //         <Pressable onPress={subS}>
    //           <Entypo name={'cross'} size={20}/>
    //         </Pressable>
            
    //       </View>
    //       </View>
    //     );
    // arrL.push({['langkah'+i]:langkah})
    //   }


    // const Bah = firebase.database().ref('/listAkun/'+key+'/listResep')
    // const Lang = firebase.database().ref('/listAkun/'+key+'/listResep')
    // const Id = firebase.database().ref('/listAkun/'+key+'/listResep')
    // console.log(arrB)
    // console.log(arrL)

    // Id.update({
    //   email:email,
    //   title:title,
    // })
    // Bah.update({
    //   bahan:arrB,
    // })
    // Lang.update({
    //   langkah:arrL,
    // })

    
    const [imageCamera, setImageCamera] = useState(null)
    const [imageGalery, setImageGalery] = useState(null)
    const [uplouding, setUploading] = useState(false)
    const [transferred, setTransferred] = useState(0)



    const options = {
        title: 'Select Image',
        path: 'images',
        mediaType: 'photo',
    }

    const openPicker = () =>{
        launchImageLibrary(options, function (response) {
            console.log('Response = ', response);
            if(response.didCancel){
                console.log('User cancelled image picker')
            }else if(response.error){
                console.log('ImagePicker Error: ',response.error);
            }else if (response.customButton){
                console.log('User tapped custom: ', response.customButton)
            }
            else{
                const source = response.assets[0]
                console.log(source.uri)
                setImageGalery(source.uri)
                
                
            }
        }) 
    }

    const openCam = () =>{
        launchCamera(options, response => {
            console.log('Response = ', response);
            if(response.didCancel){
                console.log('User cancelled image picker')
            }else if(response.error){
                console.log('ImagePicker Error: ',response.error);
            }else if (response.customButton){
                console.log('User tapped custom: ', response.customButton)
            }
            else{

                const source = response.assets[0]
                console.log(source.uri)
                setImageCamera(source.uri)
                const filename = source.uri.substring(source.uri.lastIndexOf('/') + 1);
        
        
                const task = storage().ref(filename).putFile(source.uri)
         
                task.on('state_changed', snapshot => {
                  setTransferred(
                    Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
                  );
                });
            
            }
        }) 
    }

    const uploadImage = async () =>{
        const {uri} = imageCamera;
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        
        
        const task = storage().ref(filename).putFile(uploadUri)
         
        task.on('state_changed', snapshot => {
          setTransferred(
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
          );
        });
        try {
            await task;
          } catch (e) {
            console.error(e);
          }
         

        Alert.alert(
            "Success!",
            "Upload Berhasil!",
            [{
                text: "OK",
                onPress: () => navigation.navigate("Home")
        }]
        )
        setImage(null);
        
    }

    
    const pop = () =>{
        Alert.alert(
            "Choose",
            "Silahkan Pilih",
            [
                {
                    text: "Dari Gallery",
                    onPress: () => openPicker()
                },
                {
                    text:"Dari Camera",
                    onPress: () => openCam()
                }
            ]
        )
    }
    

      
  return (
    <ScrollView style={{backgroundColor: '#EFE8E0'}}>
        <View style={styles.conAdd}>
            <Text style={styles.text}>Tulis Resep</Text>
            <TextInput style={styles.inputF} placeholder="Nama Resep" 
            onChangeText={text => setTitle(text)}
            ></TextInput>
            <Text style={{fontSize: 18, marginBottom: 10, marginTop: 10, color: '#000', fontFamily: 'Inter-Reguler',}}>Tambahkan Gambar</Text>
            <View style={styles.add}>
            <FontAwesome5 name={'images'} size={100} style={{position:'absolute'}}/>
                <Pressable onPress={pop} style={{height:"100%", width:"100%"}}>
                    
                    {imageCamera !== null &&
                    <Image source={{uri:imageCamera}} style={{height:"100%", width:"100%"}}></Image>
                    }
                    {imageGalery !== null &&
                    <Image source={{uri:imageGalery}} style={{height:100, width:100}}></Image>
                    }
                </Pressable>
            </View>
        </View>
        <Text style={{width:'90%', alignSelf: 'center', fontSize: 18, marginBottom: 10, marginTop: 10, color: '#000', fontFamily: 'Inter-Reguler',}}>Bahan - Bahan</Text>
        {inputBahan}

        
        <Pressable style={styles.btnAdd} onPress={onPress}>
            <Text style={styles.btnText}>Tambah Bahan</Text>
        </Pressable>
        
        <Text style={{width:'90%', alignSelf: 'center', fontSize: 18, marginBottom: 10, marginTop: 10, color: '#000', fontFamily: 'Inter-Reguler',}}>Langkah Masak</Text>
        {inputLangkah}


        <Pressable style={styles.btnAdd} onPress={tambah}>
            <Text style={styles.btnText}>Tambah Langkah</Text>
        </Pressable>


        <Pressable style={styles.btnUpload} onPress={uploadImage} >
            <Text style={{fontSize: 18, color: '#000'}}>Upload</Text>
        </Pressable>
        <View style={{marginBottom: 20}}></View>
    </ScrollView>
  );
}
  
    


const styles = require('./styles/styleAdd');

export default add;