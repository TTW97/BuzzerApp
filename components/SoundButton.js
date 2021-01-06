import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';
import database from '../config.js';
import firebase from 'firebase';

class SoundButton extends React.Component {

  playSound = async ()=> {

    await Audio.Sound.createAsync ({

      uri: 'http://soundbible.com/grab.php?id=658&type=mp3'

      },

      {shouldPlay: true}

    );


  }

  isButtonPressed(buttoncolor) {

    //var time = new Date().getTime();

    var team = database.ref('teams/'+buttoncolor+'/');
    team.update({

      'isButtonPressed':true,
      'time': firebase.database.ServerValue.TIMESTAMP

    })

  }

  render() {
    return (
      
      <TouchableOpacity style= {[styles.button, {backgroundColor: this.props.color}]}  
      
        onPress = {()=> {

          var buttoncolor = this.props.color;
          this.isButtonPressed(buttoncolor)
          this.playSound()

        }}> 

        <Text style={styles.buttonText}>Press Me</Text> 

      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  button: { marginTop: 250,
          marginLeft: 50,
          borderWidth: 10,
          borderColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          width: 200,
          height: 200,
          borderRadius: 100
          }, 
          buttonText: {
          fontSize: 20,
          fontWeight: 'bold' }})

export default SoundButton