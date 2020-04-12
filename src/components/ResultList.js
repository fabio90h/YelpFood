import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "../components/ResultsDetail";
import { useNavigation } from "@react-navigation/native";

const ResultList = ({ title, result }) => {
	const navigation = useNavigation();

	return (
		<View>
			<Text style={stlyes.titleStyle}>{title}</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={result}
				keyExtractor={(current) => current.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate("Results", { id: item.id })}>
							<ResultsDetail result={item} />
						</TouchableOpacity>
					);
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
