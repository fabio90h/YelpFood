import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ResultList = ({ title, result }) => {
	return (
		<View>
			<Text style={stlyes.titleStyle}>{title}</Text>
			<Text>Amount: {result.length}</Text>
		</View>
	);
};

const stlyes = StyleSheet.create({
	titleStyle: {
		fontWeight: "bold",
	},
});

export default ResultList;
