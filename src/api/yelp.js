import axios from "axios";

//More information can be found on Yelp.com/fusion
export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	//Need to pass in the API key in the header along with the key "Bearer"
	headers: {
		Authorization:
			"Bearer nR9DDuHKE8umnlPt4nTPSm8z9Zj9vy7pLt4gTkV-S9PjSQ7X2taBvQG1L3aHftaQrWiVBGJKoNOAIjWnrDkOemW2j1Sj4M3IZwWFKuMMNFwpHV3zIlpSZ-ZHfIaQXnYx",
	},
});
