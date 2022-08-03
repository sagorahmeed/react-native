/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View
            style={[
              styles.heading,
              {
                flexDirection: 'row',
              },
            ]}>
            <View style={[styles.layout, {backgroundColor: '#55efc4'}]}>
              <Text
                style={styles.title}
                onPress={() => alert('hey mr react native')}>
                hello world
              </Text>
              <Text style={styles.desc}>hello world</Text>
            </View>
            <View style={[styles.layout, {backgroundColor: '#81ecec'}]}>
              <Text style={styles.title}>hello world</Text>
              <Text style={styles.desc}>hello world</Text>
            </View>
          </View>

          <View
            style={[
              styles.heading,
              {
                flexDirection: 'row',
              },
            ]}>
            <View style={[styles.layout, {backgroundColor: '#00b894 '}]}>
              <Text style={styles.title}>hello world</Text>
              <Text style={styles.desc}>hello world</Text>
            </View>
            <View style={[styles.layout, {backgroundColor: '#00cec9'}]}>
              <Text style={styles.title}>hello world</Text>
              <Text style={styles.desc}>hello world</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.subCard}>
            <View style={styles.icon} />
            <View>
              <Text style={styles.cardTitle}>customer</Text>
              <Text style={styles.cardHeading}>good quality</Text>
            </View>
          </View>
          <View>
            <Text style={styles.cardInfo}>230k</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.subCard}>
            <View style={styles.icon} />
            <View>
              <Text style={styles.cardTitle}>customer</Text>
              <Text style={styles.cardHeading}>good quality</Text>
            </View>
          </View>
          <View>
            <Text style={styles.cardInfo}>230k</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.subCard}>
            <View style={styles.icon} />
            <View>
              <Text style={styles.cardTitle}>customer</Text>
              <Text style={styles.cardHeading}>good quality</Text>
            </View>
          </View>
          <View>
            <Text style={styles.cardInfo}>230k</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.subCard}>
            <View style={styles.icon} />
            <View>
              <Text style={styles.cardTitle}>customer</Text>
              <Text style={styles.cardHeading}>good quality</Text>
            </View>
          </View>
          <View>
            <Text style={styles.cardInfo}>230k</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.subCard}>
            <View style={styles.icon} />
            <View>
              <Text style={styles.cardTitle}>customer</Text>
              <Text style={styles.cardHeading}>good quality</Text>
            </View>
          </View>
          <View>
            <Text style={styles.cardInfo}>230k</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.subCard}>
            <View style={styles.icon} />
            <View>
              <Text style={styles.cardTitle}>customer</Text>
              <Text style={styles.cardHeading}>good quality</Text>
            </View>
          </View>
          <View>
            <Text style={styles.cardInfo}>230k</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.subCard}>
            <View style={styles.icon} />
            <View>
              <Text style={styles.cardTitle}>customer</Text>
              <Text style={styles.cardHeading}>good quality</Text>
            </View>
          </View>
          <View>
            <Text style={styles.cardInfo}>230k</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f7f9',
  },
  wrapper: {
    marginTop: 20,
  },
  heading: {
    display: 'flex',
  },
  layout: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#1abc9c',
    width: 350,
    height: 100,
    margin: 5,
    borderRadius: 4,
  },
  title: {
    color: 'white',
    textAlign: 'left',
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 17,
  },
  desc: {
    color: 'white',
    textAlign: 'left',
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 12,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  subCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#3498db',
    height: 40,
    width: 40,
    borderRadius: 100,
    marginRight: 20,
  },
  cardTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
  cardHeading: {
    color: 'gray',
  },
  cardInfo: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;
