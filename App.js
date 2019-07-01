import React, { useState } from 'react';
import { AppLoading } from 'expo';

import loadAssets, { onLoadError, onLoadFinish } from './assets/loadAssets';
import Navigator from './app/navigation/Navigator';


/**
 * Mafia app
 * @returns {React.Node}
 */
export default function App() {
  const [ is_loading, setIsLoading ] = useState(true);

  if (is_loading) {
    return (
      <AppLoading
        startAsync={ loadAssets }
        onError={ onLoadError }
        onFinish={ () => onLoadFinish(setIsLoading) }
      />
    );
  }

  return (
    <Navigator />
  );
}
