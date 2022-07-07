import { useNavigation } from '@react-navigation/native'
import React, { Component } from 'react'
import { StyleSheet, View, Alert, CameraRoll } from 'react-native'
import { RNCamera } from 'react-native-camera';
// import { useNavigation } from '@react-navigation/native';

function Camera(){
    // const navigation = useNavigation()
    return (
        <Button
          title="Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      );
}


class Cam extends Component {
    render() {
        const {navigation} = this.props;
      return (
        <View style={styles.container}>
          <RNCamera
            style={{ flex: 1, alignItems: 'center' }}
            ref={ref => {
              this.camera = ref
            }}
          />
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    }
  })
  
  export default Cam(props)