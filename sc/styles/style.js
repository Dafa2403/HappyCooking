'use strict';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    // HL
    conHl:{
      backgroundColor: '#fff',
      width: '100%',
      height: 230,
      justifyContent: 'center',
      alignItems: 'center'
    },
    bgHl:{
      width: '90%',
      height: '80%',
      borderRadius: 12,
      backgroundColor: '#000'
    },
    imgHl:{
      width: '100%',
      height: '100%',
      borderRadius: 12,
      opacity: 0.7,
    },
    text:{
      fontSize: 18,
      color: '#000'
    },
    textTitle:{
      fontSize: 18,
      marginLeft: 20,
      color: '#000'
    },
  
    // Paling dicari
    conCari:{
      marginTop: 10,
      width: '100%',
      height: 320,
      backgroundColor: '#fff',
    },
    pad:{
      marginTop: 20,
      width: 200,
      backgroundColor: '#FFAC4A',
      height: 40,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset:{
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    food:{
      width: '25%',
      margin: 10,
      height: 210,
      backgroundColor: '#fff',
      marginTop: 10,
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 12,
      shadowColor: '#000',
      shadowOffset:{
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    conFood:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 10
    },
    imgFood:{
      width: '100%',
      height: '78%'
    },
    foodtext:{
      color: '#000',
      alignSelf: 'center',
      marginTop: 10,
    },

    // Detail
    con:{
      width: '100%',
      height: 250,
      backgroundColor: '#fff',
      justifyContent: 'center',

    },
    imgDetail:{
      width: '90%',
      height : 180,
      opacity: 1,
      alignSelf: 'center',
      marginTop: 10
    },
    conReview:{
      width: '100%',
      height: 200,
      backgroundColor: '#fff',
      marginTop: 10,
      justifyContent: 'center'
    },
    Review:{
      backgroundColor: '#FFBB6B',
      width: '90%',
      height: 150,
      alignSelf: 'center',
      borderRadius: 12
    },
    conBahan:{
      width: '100%',
      height: 200,
      backgroundColor: '#fff',
      marginTop: 10,
      justifyContent: 'center'
    },
    bahan:{
      width:'90%',
      height: '90%',
      alignSelf: 'center'
    },
    line:{
      width: '100%',
      height: 1,
      backgroundColor: '#000'
    },

    conLangkah:{
      width: '100%',
      height: 200,
      backgroundColor: '#fff',
      marginTop: 10,
      justifyContent: 'center'
    },
    langkah:{
      width:'90%',
      height: '90%',
      alignSelf: 'center'
    },

    conWriter:{
      width: '100%',
      height: 200,
      backgroundColor: '#fff',
      marginTop: 10,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    Writer:{
      width:'60%',
      alignSelf: 'center',
    },

    conUlasan:{
      width: '100%',
      height: 300,
      backgroundColor: '#fff',
      marginTop: 10,
      justifyContent: 'center'
    },
    ulasan:{
      width:'90%',
      height: '70%',
      alignSelf: 'center',
      marginTop: 10
    },
    inputUlasan:{
      borderWidth: 2,
      borderRadius: 12,
      height: '60%',
      marginTop: 10
    },

    btnsubmit:{
      backgroundColor: '#000',
      borderRadius: 12,
      width: 100,
      height: 30,
      alignItems: 'center',
      alignSelf: 'flex-end',
      marginRight: 30,
      justifyContent: 'center',
      marginBottom: 10
    },
    imgProfile:{
      width: 150,
      height: 150,
      opacity: 1,
      marginRight: 5,
      alignSelf: 'center'
    },

    conHeader:{
      width: '100%',
      height: 80,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset:{
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    header:{
      width: '90%',
      
    },
    search:{
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 12,
      justifyContent: 'center',
      backgroundColor: '#fff',

    },
    inputSearch:{
      width: '90%',
    },
    bg:{
      width: '100%',
      height: '100%',
      position: 'absolute',
      justifyContent: 'flex-end'
    },
    textHl:{
      position: 'absolute',
      zIndex: 1,
      width: '100%',
      height: '100%',
    },
    font:{
      marginLeft: 15,
      color: '#000', 
      fontSize: 20, 
      fontFamily: 'Inter-SemiBold',
    },
    horiz:{
      width: '100%',
      height: '100%',
      flexDirection: 'row',
    },
    reko:{
      color: '#fff', 
      fontSize: 28, 
      fontFamily: 'Inter-SemiBold',
      zIndex: 1,
      marginTop: '25%',
      marginLeft: 10,
      width: 350
    }
  });