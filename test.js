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
 } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';



export default class add extends React.Component {
  render(){
    var inputBahan = [];
    var inputLangkah = [];
    const [count, setCount] = useState(1);
    const [lCount, LsetCount] = useState(1);
    const tambah = () => LsetCount(lCount + 1);
    const onPress = () => setCount(count + 1);
    const sub =() => setCount(count - 1);
    const subS =() => LsetCount(lCount - 1);
    // const cam =() => this.props.navigation.navigate('Camera');
    for (let i = 0; i<count;i++){
      inputBahan.push(
        <View key={i} style={styles.con}>
          <View style={styles.conInput}>
            <TextInput style={styles.input2} placeholder="Contoh : 1 sendok garam"></TextInput>
            <Pressable onPress={sub}>
              <Entypo name={'cross'} size={20}/>
            </Pressable>
            
          </View>
            
        </View>
      );
    }
    for (let i = 0; i<lCount;i++){
        inputLangkah.push(
          <View key={i} style={styles.con}>
            <Pressable >
                {/* Icon IMG */}
                <FontAwesome5 name={'images'} size={30} style={styles.icon} color='black'/>
            </Pressable>
            <View style={styles.conInput2}>
            <TextInput style={styles.input} placeholder="Langkah"></TextInput>
            <Pressable onPress={subS}>
              <Entypo name={'cross'} size={20}/>
            </Pressable>
            
          </View>
          </View>
        );
      }
    
  return (
    <ScrollView style={{backgroundColor: '#EFE8E0'}}>
        <View style={styles.conAdd}>
            <Text style={styles.text}>Tulis Resep</Text>
            <TextInput style={styles.inputF} placeholder="Nama Resep"></TextInput>
            <Text style={{fontSize: 18, marginBottom: 10, marginTop: 10, color: '#000', fontFamily: 'Inter-Reguler',}}>Tambahkan Gambar</Text>
            <View style={styles.add}>
                <Pressable >
                    <FontAwesome5 name={'images'} size={100}/>
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


        <Pressable style={styles.btnUpload}>
            <Text style={{fontSize: 18, color: '#000'}}>Upload</Text>
        </Pressable>
        <View style={{marginBottom: 20}}></View>
    </ScrollView>
  );
}
  }
    


