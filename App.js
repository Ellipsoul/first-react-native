import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert, Platform, StatusBar, Dimensions } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function App() {
  console.log('App is now running!');
  console.log(Dimensions.get("screen"));
  console.log(useDimensions);

  const handlePress = () => console.log('Text pressed');
  const handlePress2 = () => console.log('Image pressed');

  return (
    <SafeAreaView style={styles.container}>

      {/* Basic text */}
      <Text style={styles.text} onPress={handlePress}>Open up this to start working on your app!! A longer text is coming now, it's really long </Text>

      {/* Touchable Component */}
      <TouchableHighlight onPress={handlePress2}>
        <Image source={{
                  uri: 'https://picsum.photos/200/100',
                  width: 200,
                  height: 100,
                }} />
      </TouchableHighlight>

      {/* Buttons and Alerts */}
      <Button 
        title="Click Me!" 
        onPress={() => Alert.alert("Title of Alert", "Message of Alert", 
                                    [{text: "Yes", onPress: () => console.log('Yes')}, 
                                     {text:"No", onPress: () => console.log('No')}])}
      />

      <Button
        title="Prompt Button"
        onPress={() => Alert.prompt("Prompt Alert", "A message", text => (console.log(text)))}
      />

      {/*  */}

      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

// Styles (plain js/ts object, not CSS)
// Can use a regular object in JavaScript but this validates syntax
// Can apply multiple styles in an array
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'goldenrod',
    alignItems: 'center',
    justifyContent: 'center',
    // Platform specific styles and getting status bar height
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
  },

  text: {
    color: 'white',
  }
});
