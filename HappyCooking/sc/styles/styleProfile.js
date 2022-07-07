'use strict';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({

    conProfile:{
        width: '100%',
        height: 180,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile:{
        width: '90%',
        height: '90%',
        flexDirection: 'row',
    },
    imgProfile:{
        width: 150,
        height: 150,
        opacity: 1,
        marginRight: 5
    },
    name:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    edit:{
        opacity: 0.5,
        marginTop: 5
    },


    conResep:{
        backgroundColor: '#fff',
        width: '100%',
        marginTop: 10,
        height: 300,
    },
    listResep:{
        width: '90%',
        height: '90%',
        margin: 10
    },
    tambah:{
        width: '45%',
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
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
      elevation: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    conBtn:{
        width: '100%',
        justifyContent: 'center',
        height: 100
    },
    btnLogout:{
        backgroundColor: '#000',
        width: 200,
        height: 40,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10
    },
    textName:{
        fontFamily: 'Inter-SemiBold',
        color: '#000',
        fontSize: 18
    },
    text:{
        fontFamily: 'Inter-Regular',
        color: '#000',
        fontSize: 14
    },
    subTitle:{
        fontFamily: 'Inter-SemiBold',
        color: '#000',
        fontSize: 18,
        marginLeft: 5
    },
    bg:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'flex-end'
      },

});