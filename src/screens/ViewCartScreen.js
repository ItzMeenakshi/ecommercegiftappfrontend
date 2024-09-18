import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ViewCartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    { id: 3, name: 'Product 3', price: 15, quantity: 3 },
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.name}</Text>
      <Text>Price: ${item.price}</Text>
      <Text>Quantity: {item.quantity}</Text>
      {/* Add buttons for updating or removing items */}
    </View>
  );

  return (
    <LinearGradient // Use LinearGradient as the background
    colors={['#FFE6E6', '#E1AFD1', '#AD88C6']}
    style={styles.container}
    >
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />
      <View style={styles.totalContainer}>
        <Text>Total: ${getTotalPrice()}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartList: {
    flexGrow: 1,
  },
  cartItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkoutButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ViewCartScreen;