import yelp from "../api/yelp";
import { useState } from "react";

export default () => {
	const [result, setResult] = useState(null);

	const getBusiness = async (id) => {
		try {
			const response = await yelp.get(`/${id}`);
			setResult(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return [result, getBusiness];
};
