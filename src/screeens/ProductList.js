import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

import * as productSelectors from '../selectors/products';
import { getProductsList } from '../actions/products';
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
    console.warn(products.length);
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>

        {isLoading ? (
          <View style={styles.wrapperLoading}>
            <ActivityIndicator />
          </View>
        ) : (
          <>
            <FlatList
              contentContainerStyle={styles.wrapper}
              columnWrapperStyle={styles.columnWrapperStyle}
              initialNumToRender={16}
              horizontal={false}
              numColumns={2}
              data={products}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              // bounces={false}
              // onEndReached={this._handleLoadMore}
              // onEndReachedThreshold={0.01}
              // ListFooterComponent={
              //   <Banner
              //     isLoadingMore={isLoadingMore}
              //     isLastPage={endOfList}
              //     screenProps={screenProps}
              //   />
              // }
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
});
