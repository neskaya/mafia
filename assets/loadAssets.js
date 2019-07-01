
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

/**
 * Loads app resources
 */
export default async function loadAssets() {
  await Promise.all([
    Asset.loadAsync([
      require('./images/pinwheel.png'),
    ]),
    Font.loadAsync({
      'default': require('./fonts/SourceSansPro-Regular.otf'),
    }),
  ]);
}

/**
 * Handles loading error
 * @param {object} error
 */
export function onLoadError(error) {
  console.warn(error);
}

/**
 * Sets is_loading state to false
 * @param {function} setIsLoading
 */
export function onLoadFinish(setIsLoading) {
  setIsLoading(false);
}
