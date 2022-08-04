/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.mainCard}>
            <View style={styles.card}>
              <View style={styles.icon} />
              <Text>set your profile details</Text>
              <View style={styles.screenContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.title}> SEND </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.icon} />
              <Text>set your profile details</Text>
              <View style={styles.screenContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.title}> SEND </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 1000,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  wrapper: {
    paddingTop: 20,
  },
  mainCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  icon: {
    backgroundColor: '#512DA8',
    width: 30,
    height: 30,
    borderRadius: 100,
  },

  button: {
    marginTop: 10,
    backgroundColor: '#512DA8',
    height: 35,
    alignItems: 'center',
    width: 120,
    borderRadius: 10,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 12,
  },
});

export default Home;
