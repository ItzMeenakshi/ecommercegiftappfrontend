import LinearGradient from 'react-native-linear-gradient';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState('');

  // Function to handle search
  const handleSearch = () => {
    // Simulating search functionality with a hardcoded array of items
    const data = ['Product 1', 'product 2', 'product 3','product 4','product 5']; // Replace with your actual search logic
    setSearchResults(data);

    // Display message based on search results
    if (data.length === 0) {
      setMessage('No results found');
    } else {
      setMessage('');
    }
  };

  return (
    <LinearGradient // Use LinearGradient as the background
    colors={['#FFE6E6', '#E1AFD1', '#AD88C6']}
    style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Search for products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <FlatList
        data={searchResults}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  message: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default SearchScreen;