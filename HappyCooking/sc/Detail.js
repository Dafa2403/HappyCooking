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
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


class Detail extends React.Component {
  render(){
    var bahan = [];
  for (let i = 0; i<2;i++){
    bahan.push(
      <View key={i}>
        <Text style={styles.text}>{i}</Text>
        <View style={styles.line}></View>
      </View>
    );
  }

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
        {bahan}
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

  }

  
const styles = require('./styles/style');

export default Detail;