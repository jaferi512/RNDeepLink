/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
const url1 = 'https://github.com/jaferi512';
const number = '+92 3046282189';

const App: () => Node = () => {
  const [message, setmessage] = useState('welcome');
  const opeurl = async url => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      alert("Don't know abuot this");
    }
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ok</Text>

      <TouchableOpacity
        onPress={() => opeurl(url1)}
        style={{padding: 7, backgroundColor: 'lightgreen', margin: 4}}>
        <Text>Github</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL(`tel:${number}`)}
        style={{padding: 7, backgroundColor: 'lightgreen', margin: 4}}>
        <Text>Call</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL(`sms:number=${number}?body=${message}`)}
        style={{padding: 7, backgroundColor: 'lightgreen', margin: 4}}>
        <Text>SMS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            `mailto:support@me.com?subject=testing&body=${message}`,
          )
        }
        style={{padding: 7, backgroundColor: 'lightgreen', margin: 4}}>
        <Text>Mail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openSettings()}
        style={{padding: 7, backgroundColor: 'lightgreen', margin: 4}}>
        <Text>Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`)
        }
        style={{padding: 7, backgroundColor: 'lightgreen', margin: 4}}>
        <Text>whatsapp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.google.com/maps')}
        style={{padding: 7, backgroundColor: 'lightgreen', margin: 4}}>
        <Text>Maps</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.youtube.com/')}
        style={{padding: 7, backgroundColor: 'lightgreen', margin: 4}}>
        <Text>Youtube</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('fb://facewebmodal/f')}
        style={{padding: 7, backgroundColor: 'lightgreen', margin: 4}}>
        <Text>Facebook</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
