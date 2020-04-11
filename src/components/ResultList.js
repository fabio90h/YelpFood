import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "../components/ResultsDetail";

const ResultList = ({ title, result }) => {
	return (
		<View>
			<Text style={stlyes.titleStyle}>{title}</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={result}
				keyExtractor={(current) => current.id}
				renderItem={({ item }) => {
					return <ResultsDetail result={item} />;
				}}
			/>
		</View>
	);
};

const stlyes = StyleSheet.create({
	titleStyle: {
		fontWeight: "bold",
		fontSize: 20,
		marginLeft: 15,
		marginBottom: 8,
	},
});

export default ResultList;
