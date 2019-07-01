import React from 'react';
import { StyleSheet, View } from 'react-native';

import { StyledButton, StyledText } from '../components/StyledComponents';
import store from '../store';


/**
 * Landing page
 * @returns {React.Node}
 */
export default function Landing(props) {
  const { navigate } = props.navigation;
  const [ state, actions ] = store();

  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <StyledText>
          Mafia
        </StyledText>
      </View>
      <View style={ styles.button }>
        <StyledButton
          title="Create Game"
          color="#ff822e"
          onPress={ () => navigate('WaitingRoom', {
            isHost: true,
          }) }
        />
      </View>
      <View style={ styles.button }>
        <StyledButton
          title="Join Room"
          color="#00d0ff"
          onPress={ () => navigate('WaitingRoom', {
            isHost: false,
          }) }
        />
      </View>
      <View style={ styles.button }>
        <StyledButton
          title={ `Counter: ${ state.counter }` }
          color="black"
          onPress={ () => actions.addToCounter(1) }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    height: '35%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    width: '90%',
    margin: 5,
  },
});

