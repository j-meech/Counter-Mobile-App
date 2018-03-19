import React from "react";
import { StyleSheet, Text, TouchableHighlight, } from 'react-native';



const Button = ({ underlayColor, labelText, onPress }) => {

	
		return (
		    <TouchableHighlight style={styles.button} underlayColor={ underlayColor } onPress={ onPress }>
			    <Text style={styles.buttonLabel}>{ labelText }</Text>
			</TouchableHighlight>
		);
};

const styles = StyleSheet.create({

	button: {
		width: 60,
		height: 60,
		margin: 10,
		backgroundColor: '#5a2961',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 6,
	},

	buttonLabel: {
		color: '#fff',
		fontSize: 40,
	},
});

export default Button;
