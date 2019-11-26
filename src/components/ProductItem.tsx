import React from 'react';
import { Text, StyleSheet, View, Dimensions, Image } from 'react-native';

import { noProductImage } from '../img';
import { IProduct } from 'src/store/types';

const { width } = Dimensions.get('window');

const ProductItem: React.FC<IProduct> = ({ theme, text, price, images }) => {
  const pic =
    images && images.length ? { uri: images[0].file } : noProductImage;
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={pic} />
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
