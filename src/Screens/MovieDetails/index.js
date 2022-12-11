import React, { useState, useEffect } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	Image,
	ScrollView,
	ActivityIndicator
} from 'react-native';
import axios from 'axios';

import Recommendation from '../../components/Recommendation';
import styles from './style';
import FILM_KEY from '../../../constant';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DEFAULT_IMG = "https://media.gettyimages.com/photos/old-film-perforated-celluloid-picture-id155278297?s=2048x2048";
const IMG_ENDPOINT = `https://image.tmdb.org/t/p/w500/`;

function getImage(path) {
	if (!path) {
		return DEFAULT_IMG;
	}
	return `${IMG_ENDPOINT}/${path}`;
};

const MovieDetails = ({ navigation, route }) => {
	const { movieId } = route.params;
	const [movie, setMovie] = useState({});
	const [trailers, setTrailers] = useState([]);
	const [recommendations, setRecommendations] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
    
	useEffect(() => {
		function fetchMovie() {
			setLoading(true);
			try {
				axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${FILM_KEY}&append_to_response=videos`)
					.then(({ data: response }) => {

						const trailersLoaded = response.videos.results.map((trailer) => {
							return {
								id: trailer.id.toString(),
								key: trailer.key,
							}
						});

						const movieLoaded = {
							id: response.id,
							title: response.title,
							overview: response.overview,
							image: getImage(response.poster_path),
							rating: response.vote_average,
							release_date: response.release_date
						}
						setMovie(movieLoaded);
						setTrailers(trailersLoaded);
					})
			}
			catch (error) {
				setError('Something went wrong');
			} finally {
				setLoading(false);
			}

		}

		async function fetchRecommendations() {
			setLoading(true);

			try {
				const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${FILM_KEY}&language=en-US&page=1`)

				const recommendationsLoaded = res.data.results.map((recommendation) => ({
					...recommendation,
					image: getImage(recommendation.poster_path),
				}));
				setRecommendations(recommendationsLoaded);
			} catch (error) {
				setError('Something went wrong');
			} finally {
				setLoading(false);
			}
		}

		fetchMovie();
		fetchRecommendations();
	}, []);
	const addFilm = ()=>{
		axios.post("https://61cfb80065c32600170c7fa8.mockapi.io/film",
			{movie}
		).then((res)=>alert("Add success"))
		.catch(err=>alert(err.toString()))
	}
	if (error) {
		return (
			<View>
				<Text>{error}</Text>
			</View>
		)
	} else if(loading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator />
			</View>
		)
	} else {
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<Image style={styles.img} source={{ uri: movie.image }} />
					<Text style={styles.title}>{movie.title}</Text>
					<Text style={styles.overview}>{movie.overview}</Text>
					<Text>
						<View><Text style={styles.rating}>Rating: {movie.rating}</Text></View>
						<View><Text style={styles.release_date}>Release Date: {movie.release_date}</Text></View>
					</Text>
					<View>
						{
							trailers.length === 0 ? (
								<View></View>
							) : (
								<View>
									<Text>Trailers</Text>
									{
										trailers.map((trailer) => (
											//<Video source={{uri: `https://www.youtube.com/watch?v=${trailer.key}`}} />
											<Text key={trailer.id}>{trailer.key}</Text>
										))
									}
								</View>
							)
						}
					</View>
					<TouchableOpacity 
						onPress={addFilm}
						style={styles.button}>
						<Text>Add to interested film</Text>
					</TouchableOpacity>
					{
						recommendations.length === 0 ? (
							<View></View>
						) : (
								<View style={styles.recs}>
									<Text style={styles.rec_head}>Recommendations</Text>
									<View style={styles.recommendation}>
										{
											recommendations.map((item) => (
												<Recommendation key={item.id.toString()} item={item} navigation={navigation} />
											))
										}
									</View>
								</View>
							)
					}
				</ScrollView>
			</SafeAreaView>
		)
	}
};
export default MovieDetails;
