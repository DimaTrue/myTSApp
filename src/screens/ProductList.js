import React, { Component } from 'react';
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

class ProductList extends Component {
  componentDidMount() {
    const { getProductsList } = this.props;
    getProductsList(1);
  }

  renderItem = ({ item }) => (
    <View style={styles.itemCatalog}>
      <ProductItem {...item} />
    </View>
  );

  keyExtractor = ({ pk }) => pk;

  render() {
    const { isLoading, products, error } = this.props;
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
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
            />
          </>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
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
