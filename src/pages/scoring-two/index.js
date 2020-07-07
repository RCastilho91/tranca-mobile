import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native/';
import logoImg from '../../assets/logo.png';
import styles from './styles';

class TwoTeams extends Component {
    constructor(props) {
        super(props)

         this.aScoreInput = React.createRef();
         this.bScoreInput = React.createRef();

         this.state = {
            totalAScore: 0,
            totalBScore: 0,
            roundNumber: 0,
            roundScores: []
        }
     }

    function handleRoundEnd() {

         var roundValue = this.state.roundNumber;
         const aValue = parseInt(this.aScoreInput.current.value, 0);
         const bValue = parseInt(this.bScoreInput.current.value, 0);
         this.valueInputForm.reset();

         this.setState({
            roundNumber: roundValue + 1,
            roundScores: [
               ...this.state.roundScores,
               { round: roundValue + 1, teamA: aValue, teamB: bValue },
            ],
            totalAScore: this.state.totalAScore + aValue,
            totalBScore: this.state.totalBScore + bValue
         });
     }
  
     function renderScoreData() {
        return this.state.roundScores.map(( roundScoring ) => {
           const { round, teamA, teamB } = roundScoring
           return (
              <tr>
                  <td> { round } </td>
                  <td>{ teamA }</td>
                  <td>{ teamB }</td>
              </tr>
           )
        })
     }

     return(
         <View style= {styles.container }>
            { logoImg }
        </View>
     );
}