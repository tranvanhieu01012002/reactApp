import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { LoginButton, Profile } from 'react-native-fbsdk-next';
import { FlatList } from 'react-native-gesture-handler';
import style from './style';
import Movie from '../Movie';
import axios from 'axios';

const LoginFacebook = () => {

    const [user, setUser] = useState({
        image: "",
        name: "",
        isLogged: false
    });

    const [movies, setMovies] = useState([]);

    const currentProfile = Profile.getCurrentProfile().then(
        function (currentProfile) {
            if (currentProfile) {
                if (!user.isLogged) {
                    setUser({
                        image: currentProfile.imageURL,
                        name: currentProfile.firstName + " " + currentProfile.lastName,
                        isLogged: true
                    });
                }
            }
        }
    );
    useEffect(() => {
        axios.get(`https://61cfb80065c32600170c7fa8.mockapi.io/film`)
            .then((res) => setMovies(res.data))
            .catch(err => alert(err.toString()))
    }, []);
    console.log(movies);
    return (
        <View style={style.container}>
           
            {user.isLogged ? <Image style={style.image} source={{ uri: user.image }} /> : <Text>Login to view your film</Text>}
            {user.isLogged ? <Text>Name: {user.name}</Text> : <Text>Not found</Text>}
            {user.isLogged ? <FlatList
                horizontal={false}
                contentContainerStyle={style.list}
                data={movies}
                renderItem={({ item }) => (
                    <Movie item={item.movie} />
                )}
                numColumns={3}
                keyExtractor={(item) => item.id.toString()}
            /> : <Text>Login to view</Text>}
            <LoginButton
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            console.log("login has error: " + result.error);
                        } else if (result.isCancelled) {
                            console.log("login is cancelled.");
                        } else {
                            currentProfile;
                        }
                    }
                }
                onLogoutFinished={() => setUser({ isLogged: false })}
            />
        </View>
    )
}

export default LoginFacebook;
