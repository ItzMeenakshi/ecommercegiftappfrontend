import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BrowseProducts = ({ navigation }) => {
  // Dummy data for products
  const products = [
    { id: 1, name: 'Product 1', price: 10, image: require('../image1/product1.png') },
    { id: 2, name: 'Product 2', price: 15, image: require('../image1/product2.png') },
    { id: 3, name: 'Product 3', price: 20, image: require('../image1/product3.png') },
    { id: 4, name: 'Product 4', price: 25, image: require('../image1/product4.png') },
    { id: 5, name: 'Product 5', price: 30, image: require('../image1/product5.png') },
  ];

  // Function to handle product selection
  const goToProductDetailsScreen = (product) => {
    // Navigate to the product details screen, passing the product as a parameter
    navigation.navigate('ProductDetailsScreen', { product });
  };

  // Render individual product item
  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => goToProductDetailsScreen(item)}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Price: ${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient // Use LinearGradient as the background
    colors={['#FFE6E6', '#E1AFD1', '#AD88C6']}
    style={styles.container}
    >
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  productList: {
    alignItems: 'center',
  },
  productItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
  },
});

export default BrowseProducts;