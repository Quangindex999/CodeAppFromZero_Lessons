
import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/Navigation';
import Store from './src/redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}

export default App;