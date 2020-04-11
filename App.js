import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Search Food">
				<Stack.Screen component={SearchScreen} name="Search Food" />
				<Stack.Screen component={ResultsShowScreen} name="Results" />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
