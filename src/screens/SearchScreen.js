import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useSearch from "../hooks/useSearch";

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [error, result, searchAPI] = useSearch();

	return (
		<View>
			<SearchBar
				onSearchTermChange={setSearchTerm}
				searchTerm={searchTerm}
				onEndEditing={() => searchAPI(searchTerm)}
			/>
			{error ? <Text>{error}</Text> : null}
			<ResultList result={result["$"] || []} title="Cost Effective" />
			<ResultList result={result["$$"] || []} title="Bit Pricier" />
			<ResultList result={result["$$$"] || []} title="Big Spender" />
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
