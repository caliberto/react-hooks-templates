import React from 'react';

import AppContainer from './router/AppContainer';

import { AppStateProvider } from './context/store/AppState';
import { appReducers, initialState } from './context/reducers/config';

function App() {
  return (
    <AppStateProvider reducer={appReducers} initialState={initialState}>
      <AppContainer />
    </AppStateProvider>
  );
}

export default App;
