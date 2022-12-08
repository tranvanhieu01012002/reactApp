import React from 'react';
import { Button, View, TextInput } from 'react-native';
import styles from './style';

const SearchBar = (props) => {
    handleChange = (text) => {
        props.handleChange(text);
    };

    async function handleSubmit(event) {
        props.handleSubmit(event);
    }

    return (
        <View style={styles.searchbar}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Type movie title, author etc..."
                    value={props.query}
                    onChangeText={handleChange}
                />
            </View>
            <Button
                title="Search"
                onPress={handleSubmit}
            />
        </View>
    );
};

export default SearchBar;