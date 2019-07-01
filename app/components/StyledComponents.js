import React from 'react';
import { Text, Button } from 'react-native';


/**
 * Modifies text with default font, and adds
 * spaces around the text to fix OnePlus render bug.
 * @param {object} props
 * @returns {React.Node}
 */
export function StyledText(props) {
  return (
    <Text
      { ...props }
      style={[
        {
          fontFamily: 'default',
        },
        props.style,
      ]}
    >
      { ` ${ props.children } `}
    </Text>
  );
}

/**
 * Modifies button with default font, and adds
 * spaces around the title to fix OnePlus render bug.
 * @param {object} props
 * @returns {React.Node}
 */
export function StyledButton(props) {
  return (
    <Button
      { ...props }
      title={ ` ${ props.title } ` }
      accessibilityLabel={ props.title }
    />
  );
}
