import React from 'react';
import { StyleSheet, View } from 'react-native';

import { StyledText, StyledButton } from '../components/StyledComponents';
import store from '../store';


/**
 * Mafia app
 * @returns {React.Node}
 */
export default function WaitingRoom(props) {
  const { goBack, getParam } = props.navigation;
  const [ state, actions ] = store();

  const isHost = getParam('isHost', false);

  return (
    <View style={styles.container}>
      <StyledText>
        { isHost ? 'Welcome, host.' : 'Welcome, player.' }
      </StyledText>
      <View style={ styles.button }>
        <StyledButton
          title={ `Counter: ${ state.counter }` }
          color="black"
          onPress={ () => actions.addToCounter(1) }
        />
      </View>
      <View style={ styles.button }>
        <StyledButton
          title={ `Back` }
          color="gray"
          onPress={ () => goBack() }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    margin: 5,
  },
});
