import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ onSearchTermChange, searchTerm }) => {
	return (
		<View style={styles.backgroundStyle}>
			<FontAwesome name="search" style={styles.iconStyle} />
			<TextInput
				style={styles.inputStyle}
				placeholder="Search"
				onChangeText={(text) => onSearchTermChange(text)}
				value={searchTerm}
				autoCapitalize="none"
				autoCorrect={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 10,
		backgroundColor: "#F0EEEE",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
	},
	iconStyle: {
		marginHorizontal: 15,
		fontSize: 35,
		alignSelf: "center",
	},
	inputStyle: {
		flex: 1,
		fontSize: 19,
	},
});

export default SearchBar;
