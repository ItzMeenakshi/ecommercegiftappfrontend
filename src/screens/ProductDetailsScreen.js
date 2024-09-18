import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProductDetailsScreen = ({ route }) => {
  // Extracting the product data from the route params
  const { product } = route.params;
  

  return (
    <LinearGradient // Use LinearGradient as the background
    colors={['#FFE6E6', '#E1AFD1', '#AD88C6']}
    style={styles.container}
    >
      <Image source={require('../image1/product1.png')} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>Price: ${product.price}</Text>
      {/* Add more details as needed */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: 'gray',
  },
});

export default ProductDetailsScreen;