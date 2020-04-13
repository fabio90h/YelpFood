import React, { useEffect } from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import useGetBusiness from "../hooks/useGetBusiness";

const ResultsShowScreen = ({ route }) => {
	const [result, getBusiness] = useGetBusiness();

	useEffect(() => {
		getBusiness(route.params.id);
	}, []);

	if (!result) return null;

	return (
		<View>
			<Text style={styles.titleStyle}>{result.name}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(current) => current}
				data={result.photos}
				renderItem={({ item }) => <Image style={styles.imageStyle} source={{ uri: item }} />}
			/>
			<Text>Rating: {result.rating}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		fontWeight: "bold",
		fontSize: 18,
		marginLeft: 15,
		marginBottom: 10,
	},
	imageStyle: {
		height: 160,
		width: 200,
		marginLeft: 15,
		borderRadius: 5,
	},
});

export default ResultsShowScreen;
