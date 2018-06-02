import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Icone extends React.Component {
	render() {
		if (this.props.escolha == 'pedra') {
			return (
				<View style={styles.icone}>
					<Text style={styles.lblJogador}>{ this.props.jogador }</Text>
					<Image source={require('../../imgs/pedra.png')} />
				</View>
			);
		} else if (this.props.escolha == 'papel') {
			return (
				<View style={styles.icone}>
					<Text style={styles.lblJogador}>{ this.props.jogador }</Text>
					<Image source={require('../../imgs/papel.png')} />
				</View>
			);
		} else if (this.props.escolha == 'tesoura') {
			return (
				<View style={styles.icone}>
					<Text style={styles.lblJogador}>{ this.props.jogador }</Text>
					<Image source={require('../../imgs/tesoura.png')} />
				</View>
			);
		} else {
			return false;
		}
	}
}

const styles = StyleSheet.create({
	icone: {
		alignItems: 'center',
		marginBottom: 20,
	},
	lblJogador: {
		fontSize: 18
	}
});