import React, { Component, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

import * as productSelectors from '../store/selectors/products';
import { getProductsList } from '../store/reducers/products';
import ProductItem from '../components/ProductItem';
import { RootState } from '../store/reducers';
import { IProduct } from '../store/types';

interface Props {
  isLoading: boolean;
  products: IProduct[];
  error: string;
  getProductsList: (pageNumber: number) => void;
}

const ProductList: React.FC<Props> = ({
  isLoading,
  products,
  error,
  getProductsList,
}) => {
  useEffect((): void => {
    (async function func() {
      await getProductsList(5);
    })();
  }, []);

  const renderItem = ({ item }: { item: IProduct }) => (
    <ProductItem {...item} />
  );

  const keyExtractor = ({ pk }: any) => pk;

  return (
    <View style={styles.container}>
      <Text>Products</Text>
      {isLoading ? (
        <View style={styles.wrapperLoading}>
          <ActivityIndicator />
        </View>
      ) : (
        <>
          <FlatList
            initialNumToRender={10}
            horizontal={false}
            numColumns={2}
            data={products}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoading: productSelectors.isLoadingSelector(state),
  products: productSelectors.productsSelector(state),
  error: productSelectors.getErrorSelector(state),
});

const mapDispatchToProps = { getProductsList };

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperLoading: {
    flex: 1,
  },
});
