import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "../components/ResultsDetail";

const ResultList = ({ title, result }) => {
	return (
		<View>
			<Text style={stlyes.titleStyle}>{title}</Text>
			<FlatList
				horizontal
				data={result}
				keyExtractor={(current) => current.id}
				renderItem={({ item }) => {
					return <ResultsDetail result={item} />;
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
