import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ResultList = ({ title, result }) => {
	return (
		<View>
			<Text style={stlyes.titleStyle}>{title}</Text>
			<FlatList
				horizontal
				data={result}
				keyExtractor={(current) => current.id}
				renderItem={({ item }) => {
					return <Text>{item.name}</Text>;
				}}
			/>
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
