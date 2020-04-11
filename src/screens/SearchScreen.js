import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useSearch from "../hooks/useSearch";

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [error, result, searchAPI] = useSearch();

	return (
		<>
			<SearchBar
				onSearchTermChange={setSearchTerm}
				searchTerm={searchTerm}
				onEndEditing={() => searchAPI(searchTerm)}
			/>
			{error ? <Text>{error}</Text> : null}
			<ScrollView>
				<ResultList result={result["$"] || []} title="Cost Effective" />
				<ResultList result={result["$$"] || []} title="Bit Pricier" />
				<ResultList result={result["$$$"] || []} title="Big Spender" />
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
