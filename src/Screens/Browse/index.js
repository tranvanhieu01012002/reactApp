import React, { useState, useEffect } from 'react';
import { 
    ActivityIndicator, 
    View, 
    Text, 
    FlatList, 
    TouchableOpacity, 
    SafeAreaView
    }
from 'react-native';
import axios from 'axios';

import Movie from '../../components/Movie';
import FILM_KEY from '../../../constant';
import styles from './style';

const DEFAULT_IMG = "https://media.gettyimages.com/photos/old-film-perforated-celluloid-picture-id155278297?s=2048x2048";
const IMG_ENDPOINT = `https://image.tmdb.org/t/p/w500/`;

function getImage(path) {
    if (!path) {
        return DEFAULT_IMG;
    }
    return `${IMG_ENDPOINT}/${path}`;
}

const Browse = (props) => {

    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('popular');
    const [error, setError] = useState('');
    const [offset, setOffset] = useState(1);

    useEffect(() => {
        fetchMovies();
    }, []);

    function fetchMovies() {
        setLoading(true);
        try {
            axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${FILM_KEY}&language=en-US&page=${offset}`)
                .then((res) => {
                    const loadedMovies = res.data.results.map((movie) => ({
                        ...movie,
                        image: getImage(movie.poster_path),
                    }))

                    setMovies(loadedMovies);
                    setOffset(offset + 1);
                })
        } catch (error) {
            setError('Something went wrong');
        } finally {
            setLoading(false);
        }
    }

    function handlePopular() {
        setCategory('popular');
        fetchMovies();
    }

    function handleTopRated() {
        setCategory('top_rated');
        fetchMovies();
    }

    function handleUpcoming() {
        setCategory('upcoming');
        fetchMovies();
    }

    if (error) {
        return (
            <View>
                <Text>{error}</Text>
            </View>
        )
    } else if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        )
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.category}>
                    <TouchableOpacity onPress={handlePopular}>
                        <Text style={styles.category_head}>Popular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleTopRated}>
                        <Text style={styles.category_head}>Top Rated</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleUpcoming}>
                        <Text style={styles.category_head}>Upcoming</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.popular}>
                    <FlatList
                        contentContainerStyle={styles.container}
                        data={movies}
                        horizontal={false}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <Movie item={item} navigation={props.navigation} />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        onEndReached={fetchMovies}
                        onEndReachedThreshold={0.1}
                    />
                </View>
            </SafeAreaView>
        )
    }
};
export default Browse;