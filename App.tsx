import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import ProductList from './src/screeens/ProductList';
import { store } from './src/store/store';

interface Props {}

interface State {
  name: String;
}

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <ProductList />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
