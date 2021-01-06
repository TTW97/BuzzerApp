import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader.js'
import database from '../config.js'

export default class HomeScreen extends React.Component {

  constructor() {

    super();
    this.state = {

      greenStatus: true,
      redStatus: true,
      blueStatus: true,
      yellowStatus: true

    }

  }

  componentDidMount() {

    var teamref = database.ref('teams/');
    teamref.on('value', (data) => {

      var teamDetails = data.val();
      this.setState({

        redStatus: teamDetails.red.enabled,
        blueStatus: teamDetails.blue.enabled,
        greenStatus: teamDetails.green.enabled,
        yellowStatus: teamDetails.yellow.enabled

      })

      console.log(teamDetails)

    })  


  }

  goToBuzzerScreen = (buzzerColor)=> {

    this.props.navigation.navigate('BuzzerScreen', {color: buzzerColor});
    var teamref = database.ref('teams/'+buzzerColor)
    teamref.update({

      'enabled': false

    })

  }

  render() {

    return(

      <View>

        <AppHeader />

        <TouchableOpacity  style={styles.button} 
        
        onPress={()=>this.goToBuzzerScreen("green")} disabled ={!this.state.greenStatus}>

          <Text style={styles.buttonText}>Team 1</Text>

        </TouchableOpacity>

        <TouchableOpacity disabled = {!this.state.blueStatus} style={[styles.button, {backgroundColor: 'blue'}]} onPress={()=>this.goToBuzzerScreen("blue")}>

          <Text style={styles.buttonText}>Team 2</Text>

        </TouchableOpacity>

        <TouchableOpacity disabled = {!this.state.yellowStatus} style={[styles.button, {backgroundColor: 'yellow'}]} onPress={()=>this.goToBuzzerScreen("yellow")}>

          <Text style={styles.buttonText}>Team 3</Text>

        </TouchableOpacity>

        <TouchableOpacity disabled = {!this.state.redStatus} style={[styles.button, {backgroundColor: 'red'}]} onPress={()=>this.goToBuzzerScreen("red")}>

          <Text style={styles.buttonText}>Team 4</Text>

        </TouchableOpacity>

      </View>


    );

  }

}

const styles = StyleSheet.create({
  button: { backgroundColor: 'green',
          marginTop: 50,
          marginLeft: 50,
          borderWidth: 10,
          borderColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          width: 250,
          height: 75,
          borderRadius: 10
          }, 
          buttonText: {
          fontSize: 20,
          fontWeight: 'bold' }})

