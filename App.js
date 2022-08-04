/* eslint-disable prettier/prettier */
import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Features from './src/pages/Features';
import Home from './src/pages/Home';

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.item}>Home</Text>
        </Link>
        <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.item}>About</Text>
        </Link>
        <Link to="/feature" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.item}>Features</Text>
        </Link>
        <Link to="/contact" underlayColor="#ecf0f1" style={styles.navItem}>
          <Text style={styles.item}>Contact</Text>
        </Link>
      </View>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </View>
  </NativeRouter>
);

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#34495e',
    borderRadius:10,
    marginBottom:20,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  item: {
    color: '#ecf0f1',
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  },
});

AppRegistry.registerComponent('MyApp', () => App);
