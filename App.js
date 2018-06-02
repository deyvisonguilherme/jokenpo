import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Topo from './src/components/Topo';
import Icone from './src/components/Icone';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                  escolhaUsuario : '',
                  escolhaComputador : '',
                  resultado : ''
                 };
  }

  jokenpo(escolhaUsuario) {
    
    //gera números aleatórios (0, 1, 2)    
    let numAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = null;
    let resultado = null;

    switch(numAleatorio) {
      case 0: 
        escolhaComputador = 'pedra';
      break;
      case 1: 
        escolhaComputador = 'papel'; 
      break;
      case 2: 
        escolhaComputador = 'tesoura'; 
      break;
    }

      if (escolhaComputador == escolhaUsuario) { return 'Empate'; }

      if (escolhaComputador == 'pedra') { 
        if (escolhaUsuario == 'papel') {
          resultado = 'Você ganhou';
        } else {
          resultado = 'Você perdeu';
        }
      }

      if (escolhaComputador == 'papel') {
         if (escolhaUsuario == 'tesoura') {
          resultado = 'Você ganhou';
        } else {
          resultado = 'Você perdeu';
        }
      }

      if (escolhaComputador == 'tesoura') { 
         if (escolhaUsuario == 'pedra') {
          resultado = 'Você ganhou';
        } else {
          resultado = 'Você perdeu';
        }
      }
    
    this.setState({ 
      escolhaUsuario : escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado : resultado
    });
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.painelAcoes}>
              <View style={styles.btnEscolha}>
                <Button title="pedra" onPress={ () => { this.jokenpo('pedra') } }></Button>
              </View>
              <View style={styles.btnEscolha}>
                <Button title="papel" onPress={ () => { this.jokenpo('papel') } }></Button>
              </View>
              <View style={styles.btnEscolha}>
                <Button title="tesoura" onPress={ () => { this.jokenpo('tesoura') } }></Button>
              </View>
          </View>

        <View style={styles.palco}>
          <Text style={styles.lblResultado}>{ this.state.resultado }</Text> 

          <Icone escolha={this.state.escolhaComputador } jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario } jogador='Você' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
    height: 60
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10,
  },
  lblResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});