import React, { useEffect } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import useGetBusiness from "../hooks/useGetBusiness";

const ResultsShowScreen = ({ route }) => {
	const [result, getBusiness] = useGetBusiness();

	useEffect(() => {
		getBusiness(route.params.id);
	}, []);

	return (
		<View>
			{result &&
				result.photos.map((src, index) => {
					console.log(src);
					return <Image style={styles.imageStyle} key={index} source={{ uri: src }} />;
				})}
		</View>
	);
};

const styles = StyleSheet.create({
	imageStyle: {
		height: 200,
		width: 200,
	},
});

export default ResultsShowScreen;
