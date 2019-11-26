import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, Image } from 'react-native';

import { noProductImage } from '../img';

const { width, height } = Dimensions.get('window');

const ProductItem = ({ theme, text, price, images }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={noProductImage} />
      <Text style={styles.theme}>{theme}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text}>{price}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    width: width / 2 - 10,
    padding: 5,
    margin: 5,
  },
  img: {
    width: '100%',
    height: 150,
  },
  theme: {
    textAlign: 'center',
    fontSize: 25,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  price: {
    textAlign: 'center',
    fontSize: 18,
  },
});
