import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Main() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <TouchableOpacity
        onPress={() => {
          navigate('Sub');
        }}
      >
        <Text>go to sub</Text>
      </TouchableOpacity>
    </View>
  );
}

function Sub() {
  return (
    <View style={styles.container}>
      <Text>Sub</Text>
    </View>
  );
}

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Main" component={Main} options={{ title: 'Main' }} />
      <Stack.Screen name="Sub" component={Sub} options={{ title: 'Sub' }} />
    </Stack.Navigator>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
