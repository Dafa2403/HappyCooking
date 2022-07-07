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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Component} from 'react';

class  HomeScreen extends Component {
  render(){
    return (
      <View>
        <View style={styles.conHeader}>
          <View style={styles.bg}>
            <Image source={require('../img/header.png')} style={{width: '100%', height: '100%', resizeMode: 'cover'}}></Image>
          </View>
          <View style={styles.header}>
            <View style={styles.search}>
              <FontAwesome5 name={'search'} size={30}/>
              <TextInput style={styles.inputSearch} placeholder='Cari Disini...'></TextInput>
            </View>
          </View>
        </View>
      
      <ScrollView style={{backgroundColor: '#EFE8E0'}}>
      {/* HL */}
        <View style={styles.conHl}>
          <View style={styles.bgHl}>
            <View style={styles.Hl}>
              <View style={styles.textHl}>
                <Text style={styles.reko}>Resep Ramen Telur Kari Pedas</Text>
              </View>
              
              <Image style={styles.imgHl} source={require('../img/ramen.jpg')}></Image>
            </View>
          </View>
        </View>
  
        {/* Paling Dicari */}
        <View  style={styles.conCari} >
          <View style={styles.pad}>
            <Text style={styles.font}>Paling Dicari</Text>
          </View>
          <View style={styles.conFood}>
            <ScrollView horizontal={true} style={styles.horiz} showsHorizontalScrollIndicator={false}>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/nasgor.jpeg')}></Image>
                <Text style={styles.foodtext}>Nasi Goreng Special</Text>
              </Pressable>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/pasta.jpg')}></Image>
                <Text style={styles.foodtext}>Cheese Pasta</Text>
              </Pressable>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/pasta.jpg')}></Image>
                <Text style={styles.foodtext}>Cheese Pasta</Text>
              </Pressable>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/pasta.jpg')}></Image>
                <Text style={styles.foodtext}>Cheese Pasta</Text>
              </Pressable>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/pasta.jpg')}></Image>
                <Text style={styles.foodtext}>Cheese Pasta</Text>
              </Pressable>
            </ScrollView>
  
          </View>
        </View>
  
        {/* Resep Kue */}
        <View style={styles.conCari}>
          <View style={styles.pad}>
            <Text style={styles.font}>Resep Kue</Text>
          </View>
          <View style={styles.conFood}>
          <ScrollView horizontal={true} style={styles.horiz} showsHorizontalScrollIndicator={false}>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/nasgor.jpeg')}></Image>
                <Text style={styles.foodtext}>Nasi Goreng Special</Text>
              </Pressable>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/pasta.jpg')}></Image>
                <Text style={styles.foodtext}>Cheese Pasta</Text>
              </Pressable>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/pasta.jpg')}></Image>
                <Text style={styles.foodtext}>Cheese Pasta</Text>
              </Pressable>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/pasta.jpg')}></Image>
                <Text style={styles.foodtext}>Cheese Pasta</Text>
              </Pressable>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/pasta.jpg')}></Image>
                <Text style={styles.foodtext}>Cheese Pasta</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
  
        {/* Resep Nusantara */}
        <View style={styles.conCari}>
          <View style={styles.pad}>
            <Text style={styles.font}>Resep Nusantara</Text>
          </View>
          <View style={styles.conFood}>
          <ScrollView horizontal={true} style={styles.horiz} showsHorizontalScrollIndicator={false}>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/nasgor.jpeg')}></Image>
                <Text style={styles.foodtext}>Nasi Goreng Special</Text>
              </Pressable>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/pasta.jpg')}></Image>
                <Text style={styles.foodtext}>Cheese Pasta</Text>
              </Pressable>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/pasta.jpg')}></Image>
                <Text style={styles.foodtext}>Cheese Pasta</Text>
              </Pressable>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/pasta.jpg')}></Image>
                <Text style={styles.foodtext}>Cheese Pasta</Text>
              </Pressable>
              <Pressable style={styles.food} onPress={() =>  this.props.navigation.navigate('Detail')}>
                <Image style={styles.imgFood} source={require('../img/pasta.jpg')}></Image>
                <Text style={styles.foodtext}>Cheese Pasta</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
        <View style={{marginBottom:100}}></View>
  
      </ScrollView>
      </View>
    );
  }
  
}


const styles = require('./styles/style');

export default HomeScreen;