import React from "react";
import { StyleSheet, Text, TouchableHighlight, } from 'react-native';



const Button = ({ underlayColor, labelText, onPress, disabled }) => {

	
		return (
		    <TouchableHighlight disabled={ disabled } style={[styles.button, disabled ? styles.disabled : null]} underlayColor={ underlayColor } onPress={ onPress } >
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

	disabled: {
		backgroundColor: 'grey',
	},

	buttonLabel: {
		color: '#fff',
		fontSize: 40,
	},
});

export default Button;
