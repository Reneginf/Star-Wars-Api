const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// store object values
			// root: {},
			favorites: [],
			people: [],
			films: [],
			starships: [],
			vehicles: [],
			species: [],
			planets: [],
		},
		actions: {
			/* 
			* Store fetch in variable
			* Use fetch to make a GET request to SWAPI
			* Response from API is converted to JSON
			* Data is destructured to extract results property, which is in an array of objects representing characters
			* Use for...of to iterate through the results array, making a GET to each character's URL
			* Each response is converted to JSON
			* The info property for each character is added to the data.results[index] object
			* Finally, seStore is called, passing in an object with a key: people and the updated data is its value
			*/
			getPeople: async () => {
				let url = "https://swapi.dev/api/people";
				
				try {
					const response = await fetch(url);
					const data = await response.json();
					const { results } = data;
					for (const [index, people] of results.entries()) {
						const res = await fetch(people.url);
						const info = await res.json();
						data.results[index].info = info.result && info.result.properties;
					}
					setStore({ people: data });
				} catch (error) {
					console.error(error);
				}
			},

			// getFilms: async() => {
			// 	let url = "https://swapi.dev/api/films";
			// 	const res = await fetch(url);
			// 	const data = await res.json();

			// 	setStore({
			// 		films: data.results,
			// 	});
			// },

			// getPlanets: async () => {
			// 	let url = "https://swapi.dev/api/planets";
			// 	const res = await fetch(url);
			// 	const data = await res.json();

			// 	setStore({
			// 		planets: data.results,
			// 	});
			// },

			// getSpecies: async () => {
			// 	let url = "https://swapi.dev/api/species";
			// 	const res = await fetch(url);
			// 	const data = await res.json();

			// 	setStore({
			// 		species: data.results,
			// 	});
			// },

			// getStarships: async () => {
			// 	let url = "https://swapi.dev/api/starships";
			// 	const res = await fetch(url);
			// 	const data = await res.json();

			// 	setStore({
			// 		starships: data.results,
			// 	});
			// },

			// getVehicles: async () => {
			// 	let url = "https://swapi.dev/api/vehicles";
			// 	const res = await fetch(url);
			// 	const data = await res.json();

			// 	setStore({
			// 		vehicles: data.results,
			// 	});
			// }
		}
	};
};

export default getState;
