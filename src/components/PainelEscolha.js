import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class PainelEscolha extends React.Component {
	render () {
		return (
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
  }
});