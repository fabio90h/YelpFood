import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.imageStyle} source={{ uri: result.image_url }} />
			<Text style={styles.titleStyle}>{result.name}</Text>
			<Text style={styles.descriptionStyle}>
				{result.rating} Stars, {result.review_count} Reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
	},
	imageStyle: {
		height: 160,
		width: 200,
		borderRadius: 4,
		marginBottom: 5,
	},
	titleStyle: {
		width: 200,
		marginBottom: 5,
		fontWeight: "bold",
		fontSize: 16,
		flexWrap: "wrap",
	},
	descriptionStyle: {
		color: "grey",
	},
});

export default ResultsDetail;
