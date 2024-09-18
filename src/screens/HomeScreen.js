import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const goToBrowseProducts = () => {
    // Navigate to the BrowseProducts screen
    navigation.navigate('BrowseProducts');
  };

  const handleViewCart = () => {
    // Navigate to the cart screen
    navigation.navigate('Cart');
  };

  return (
    <LinearGradient // Use LinearGradient as the background
    colors={['#FFE6E6', '#E1AFD1', '#AD88C6']}
    style={styles.container}
    >
      <Text style={styles.title}>Welcome to Gift Sales!</Text>
      <TouchableOpacity style={styles.button} onPress={goToBrowseProducts}>
        <Text style={styles.buttonText}>Browse Products</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleViewCart}>
        <Text style={styles.buttonText}>View Cart</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black',
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;