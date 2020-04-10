import Yelp from "../api/yelp";
import { useState, useEffect } from "react";

export default () => {
	const [error, setError] = useState(null);
	const [result, setResult] = useState([]);

	const searchAPI = async (term) => {
		try {
			let response = await Yelp.get("/search", {
				params: {
					limit: 50,
					term,
					location: "san jose",
				},
			});
			setResult(filterResult(response.data.businesses));
		} catch (error) {
			console.error(error);
			setError("Something went wrong. Please try again later.");
		}
	};

	useEffect(() => {
		searchAPI("pasta");
	}, []);

	return [error, result, searchAPI];
};

/**
 * Will filter out the restaurant based on price
 * @param {array} results array of object with restaurant name and its details
 * @returns {array} resultByPrice array of object filtered by price
 */
const filterResult = (results) => {
	let resultByPrice = {};

	results.forEach((current) => {
		resultByPrice[current.price] = resultByPrice[current.price]
			? [...resultByPrice[current.price], current]
			: [current];
	});

	return resultByPrice;
};
