import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 20,
  },
});

interface Props {
  count: number;
  actions: {
    increment: () => void;
    decrement: () => void;
  };
}

export default function Counter(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{props.count}</Text>
      <Button onPress={props.actions.increment} title="increment" />
      <Button onPress={props.actions.decrement} title="decrement" />
    </View>
  );
}
